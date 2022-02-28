import React from "react";
import Header from "../Component/Header";
import Main from "../Component/Main";
import SidebarLeft from "../Component/SidebarLeft";
import SidebarRight from "../Component/SidebarRight";

function home() {
  //HEADER
  //LEFTSIDEBAR
  //MAIN
  //RIGHTSIDEBAR
  return (
    <div className="flex flex-col justify-center  h-full ">
      <Header />

      <div className="bg-gray-background text-md flex justify-center w-full py-7  pt-28">
        <div className=" lg:w-11/12 xl:w-4/5 flex  gap-7">
          <SidebarLeft />
          <Main />
          <SidebarRight />
        </div>
      </div>
    </div>
  );
}
export default home;
