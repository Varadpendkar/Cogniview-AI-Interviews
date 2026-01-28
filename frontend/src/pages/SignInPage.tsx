import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn routing="path" path="/sign-in" />
    </div>
  );
};

export default SignInPage;
