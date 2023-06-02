import React, { useState } from 'react';

const SignInComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = () => {
    // Implement your sign-in logic here
    console.log('Sign in:', email, password, rememberMe);
    window.location.href = "/student-dashbord";

  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div style={{ backgroundColor: '#FEF3EC' }} className="flex flex-col items-center justify-center min-h-screen">
      <div className=" bg-white w-full max-w-sm p-4 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome back!</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1  font-semibold ">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1  font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <div className="text-right">
            <a href="/restpassword" className="text-amber-500 hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>
        <button
          className="w-full py-2 px-4 bg-amber-500 text-black rounded hover:bg-amber-600"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <div className="mr-2 text-center">
          <p href="#" className="text-black  py-2 text-sm ">Don't have an account?           <a href="/sign-up" className="text-amber-500 hover:underline py-1">Sign up now!</a></p>

        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
