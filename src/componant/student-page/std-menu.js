import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { BsFillRecordBtnFill } from "react-icons/bs";
import { MdClass } from "react-icons/md";
import {BiLogOut} from "react-icons/bi"
import Studentprofile from "./student-profile"

import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";

import { Link } from "react-router-dom";


const StdMenue = () => {
  const menus = [
    { name: "dashboard", link: "/student-dashbord", icon: MdOutlineDashboard },
    { name: "Recordings", link: "/", icon: BsFillRecordBtnFill },
    { name: "Classes", link: "/", icon: MdClass },
    { name: "Profile", link: "/", icon: AiOutlineUser },
    { name: "LogOut", link: "/", icon:BiLogOut , margin: true },
  ];
  const [open, setOpen] = useState(true);
  return (
    <div className="shadow-lg">
      <div className="flex mx-8 my-4 ">
       
        <img src=""></img>
        <h1 className="text-black text-1xl text-center font-bold">Business-Name</h1>
       
      </div>
    <div className="  ">
    <Studentprofile></Studentprofile>
   
    </div>

    <section className="flex gap-8">
      <div
        className={`   bg min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-800 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-5 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && " mt-40"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-orange-200 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
     
    </section>
    </div>
  );
};

export default StdMenue;