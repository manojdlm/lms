import React from 'react';
import Navbar from './navbar';
import StdMenu from './std-menu';


export default function StudentDashboard() {
  return (

    <div className=' flex   bg-orange-100  '>
       
        

        <div className=' bg-white'>
        <div className=' '><StdMenu />
        </div>
        </div>
     
        <div className=' w-full '> <Navbar /> </div>
    </div>
  );
}


