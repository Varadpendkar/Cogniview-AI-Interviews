import React, { createContext, useContext, useState, useEffect } from 'react';
import interviewsApi, { Interview } from '../api/interviews.api';

interface InterviewsContextType {
  interviews: Interview[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
  createInterview: (payload: any) => Promise<any>;
  updateInterview: (id: string, payload: Partial<Interview>) => Promise<any>;
  deleteInterview: (id: string) => Promise<any>;
}

const InterviewsContext = createContext<InterviewsContextType | undefined>(undefined);

export const InterviewsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchInterviews = async () => {

    setLoading(true);
    setError(null);

    try {
      // Mock user ID for development
      const userId = 'dev-user-id';
      const organizationId = 'dev-org-id';
      const data = await interviewsApi.getAll(userId, organizationId);
      setInterviews(data.data || []);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch interviews');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInterviews();
  }, []);

  const createInterview = async (payload: any) => {
    const result = await interviewsApi.create(payload);
    await fetchInterviews();
    return result;
  };

  const updateInterview = async (id: string, payload: Partial<Interview>) => {
    const result = await interviewsApi.update(id, payload);
    await fetchInterviews();
    return result;
  };

  const deleteInterview = async (id: string) => {
    const result = await interviewsApi.delete(id);
    await fetchInterviews();
    return result;
  };

  return (
    <InterviewsContext.Provider
      value={{
        interviews,
        loading,
        error,
        refetch: fetchInterviews,
        createInterview,
        updateInterview,
        deleteInterview,
      }}
    >
      {children}
    </InterviewsContext.Provider>
  );
};

export const useInterviews = () => {
  const context = useContext(InterviewsContext);
  if (!context) {
    throw new Error('useInterviews must be used within InterviewsProvider');
  }
  return context;
};
