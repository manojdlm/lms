import React, { useState } from 'react';

const AccountComponent = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [country, setCountry] = useState('');
  const [subject, setSubject] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log('Sign up:', fullName, email, contactNumber, dateOfBirth, country, subject, password, confirmPassword);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div style={{ backgroundColor: '#FEF3EC' }} className="flex flex-col items-center justify-center min-h-screen">
      <div className=" bg-white w-full   max-w-screen-md  p-4 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Create Your Account</h1>
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label htmlFor="fullName" className="block mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-3 py-1 border rounded"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </div>
          <div className="w-1/2 pl-2">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-1 border rounded"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label htmlFor="contactNumber" className="block mb-1">
              Contact Number
            </label>
            <input
              type="text"
              id="contactNumber"
              className="w-full px-3 py-1 border rounded"
              value={contactNumber}
              onChange={handleContactNumberChange}
            />
          </div>
          <div className="w-1/2 pl-2">
            <label htmlFor="dateOfBirth" className="block mb-1">
              Date of Birth
            </label>
            <input
              type="text"
              id="dateOfBirth"
              className="w-full px-3 py-1 border rounded"
              value={dateOfBirth}
              onChange={handleDateOfBirthChange}
            />
          </div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label htmlFor="country" className="block mb-1">
              Country
            </label>
            <input
              type="text"
              id="country"
              className="w-full px-3 py-1 border rounded"
              value={country}
              onChange={handleCountryChange}
            />
          </div>
          <div className="w-1/2 pl-2">
            <label htmlFor="subject" className="block mb-1">
              Subject you want to learn
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-3 py-1 border rounded"
              value={subject}
              onChange={handleSubjectChange}
            />
          </div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label htmlFor="password" className="block mb-1">
              Create a Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-1 border rounded"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="w-1/2 pl-2">
            <label htmlFor="confirmPassword" className="block mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3  py-1 border rounded"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
        </div>
        <button
          className="  w-2/4  flex   mx-auto   py-2 px-4 bg-amber-500 text-black rounded hover:bg-amber-600"
          onClick={handleSignUp}
        >
         <a className=' mx-auto flex '>Sign Up</a>
        </button>
        <div className="mr-2 text-center">
          <p href="#" className="text-black  py-2 text-sm ">Already have an Account?  <a href="/" className="text-amber-500 hover:underline py-1">Sign in!</a></p>

        </div>
      </div>
    </div>
  );
};

export default AccountComponent;
