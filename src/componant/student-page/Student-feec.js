import React, { useState } from 'react';

const PaymentComponent = () => {
  const [receipt, setReceipt] = useState('');

  const handleReceiptUpload = (e) => {
    const file = e.target.files[0];
    // Logic to handle receipt upload and store it
    setReceipt(URL.createObjectURL(file));
  };



  return ( 
  <div className='bg-amber-500 w-full h-full'>
    <div className="container mx-auto mt-6 flex bg-amber-500">
      <h2 className="text-2xl font-bold mb-4">Payments Due</h2>
      <div className="bg-white rounded-lg shadow-lg p-2 flex my-10 mx-5">
        <div className="flex items-center mb-4">
          <span className="">Grade 7 Dancing class - June Payment</span>
          <span className="font-bold text-gray-800">$12/month</span>
          <button>Make Paymant</button>
          <a>or</a>
        </div>
        <label className="block mb-2" htmlFor="receipt">
          Upload Receipt:
        </label>
        <input
          type="file"
          id="receipt"
          accept="image/*"
          onChange={handleReceiptUpload}
        />
        {receipt && (
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Uploaded Receipt:</h3>
            <img src={receipt} alt="Receipt" className="max-w-full" />
          </div>
        )}
      </div>

            


    </div>
    </div>
  );
};

export default PaymentComponent;
