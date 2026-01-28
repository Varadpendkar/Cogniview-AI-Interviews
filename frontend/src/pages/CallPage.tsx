import React from 'react';
import { useParams } from 'react-router-dom';

const CallPage: React.FC = () => {
  const { interviewId } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">AI Interview Session</h1>
        <p className="text-muted-foreground mb-8">
          Interview ID: {interviewId}
        </p>
        <div className="p-8 border rounded-lg">
          <p>Call interface will be implemented here</p>
        </div>
      </div>
    </div>
  );
};

export default CallPage;
