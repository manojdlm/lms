import React from 'react';
import { BsFillBellFill } from 'react-icons/bs';



const HandlePaymant  = () => {
   window.location.href = "/student-fees";
};

const Navbar = ({ pageName }) => {
  return (
    <nav className="    bg-white text-black p-2 flex items-center justify-between">
      <h1 className=" text-2xl font-bold">{pageName}</h1>
      <div className="flex items-center">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-md text-lg mr-4 "
        onClick={HandlePaymant} >
          Payment
        </button >
        <div className=' mx-5'>  <BsFillBellFill size={24} /></div>
       
      </div>
    </nav>
  );
};

export default Navbar;
