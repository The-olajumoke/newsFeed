import React from "react";
import logo from "../Exports/logo.png";
import { RiSearchLine } from "react-icons/ri";
function Header() {
  return (
    <div className=" flex justify-center h-56 bg-white-white py-2  fixed top-0 left-0 right-0">
      <div className=" w-full md:w-4/5  flex justify-between">
        <div className="flex  gap-7 w-1/2">
          <img className="h-full" src={logo} alt="dev logo" />
          <div className=" border-none md:border   border-gray-background md:w-3/5 rounded-xl md:shadow-sm flex justify-between  overflow-hidden pl-4">
            <input
              className="text-md px-2 outline-none hidden md:flex"
              type="text"
              placeholder="Search..."
            />
            <button className="btn-list text-2xl hover:text-2xl ">
              <RiSearchLine />
            </button>
          </div>
        </div>
        <div className=" flex gap-4">
          <button className="btn-list hidden md:flex justify-center items-center">
            Log in
          </button>
          <button className="btn-outline font-bold flex justify-center items-center">
            Create account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
