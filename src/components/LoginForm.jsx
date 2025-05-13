import { useState } from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

export default function LoginForm() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div>
      <button onClick={() => setIsSignUp(true)}>Sign Up</button>
      <button onClick={() => setIsSignUp(false)}>Sign In</button>
      {isSignUp ? <SignUpForm /> : <SignInForm />}
    </div>
  );
}
