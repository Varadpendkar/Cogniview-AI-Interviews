import React, { createContext, useContext, useState, useEffect } from 'react';
import interviewersApi, { Interviewer } from '../api/interviewers.api';

interface InterviewersContextType {
  interviewers: Interviewer[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
  createInterviewer: () => Promise<any>;
}

const InterviewersContext = createContext<InterviewersContextType | undefined>(undefined);

export const InterviewersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [interviewers, setInterviewers] = useState<Interviewer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchInterviewers = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await interviewersApi.getAll();
      setInterviewers(data.data || []);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch interviewers');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInterviewers();
  }, []);

  const createInterviewer = async () => {
    const result = await interviewersApi.create();
    await fetchInterviewers();
    return result;
  };

  return (
    <InterviewersContext.Provider
      value={{
        interviewers,
        loading,
        error,
        refetch: fetchInterviewers,
        createInterviewer,
      }}
    >
      {children}
    </InterviewersContext.Provider>
  );
};

export const useInterviewers = () => {
  const context = useContext(InterviewersContext);
  if (!context) {
    throw new Error('useInterviewers must be used within InterviewersProvider');
  }
  return context;
};
