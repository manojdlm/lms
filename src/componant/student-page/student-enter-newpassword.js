import React, { useState } from 'react';

const EnterNewPasswordComponent = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    // Implement your reset password logic here
    console.log('New password:', newPassword);
    window.location.href = "/";
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    window.location.href = "#";
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div style={{ backgroundColor: '#FEF3EC' }} className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-4 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Enter New Password</h1>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block mb-1">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            className="w-full px-3 py-2 border rounded"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-3 py-2 border rounded"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <button
          className="w-full py-2 px-4 bg-amber-500 text-black rounded hover:bg-amber-600"
          onClick={handleResetPassword}
        >
          Save New Password
        </button>
      </div>
    </div>
  );
};

export default EnterNewPasswordComponent;
