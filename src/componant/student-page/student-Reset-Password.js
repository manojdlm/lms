import React, { useState } from 'react';

const ResetPasswordComponent = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Implement your reset password logic here
    console.log('Reset password:', email);
    window.location.href = "/enterenewpassword";
    
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div style={{ backgroundColor: '#FEF3EC' }} className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-4 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Reset Password</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
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
        <button
          className="w-full py-2 px-4 bg-amber-500 text-black rounded hover:bg-amber-600"
          onClick={handleResetPassword}
        > 
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordComponent;
