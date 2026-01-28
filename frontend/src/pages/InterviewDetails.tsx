import React from 'react';
import { useParams } from 'react-router-dom';

const InterviewDetails: React.FC = () => {
  const { interviewId } = useParams();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Interview Details</h1>
      <p className="text-muted-foreground">
        Interview ID: {interviewId}
      </p>
    </div>
  );
};

export default InterviewDetails;
