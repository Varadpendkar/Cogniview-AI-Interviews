import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignUp routing="path" path="/sign-up" />
    </div>
  );
};

export default SignUpPage;
