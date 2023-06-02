import React, { useState } from 'react';

const SignInComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = () => {
    // Implement your sign-in logic here
    console.log('Sign in:', email, password, rememberMe);
  };

  return (
    <div style={{ backgroundColor: '#FEF3EC' }} className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-4 rounded shadow">
        <h1 className="text-2xl font-bold mb-4  text-center ">Admin Sign in</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <div className="text-right">
            <a href="#" className="text-amber-500 hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>
        <button
          className="w-full py-2 px-4  bg-amber-500 text-black rounded hover:bg-amber-600"
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignInComponent;
