import InforComp from "@/Components/InforComp";
import Navbar from "@/Components/Navbar";
import React from "react";

function DashBoard() {
  return (
    <div className="flex flex-col ">
      <Navbar active={"Home"} />
      <p className="text-9xl self-center font-extrabold mt-3 text-gray-800">
        MANTRA
      </p>
      <p className="self-end mr-56 font-semibold text-2xl text-gray-800">
        We are for you!!
      </p>
     
        <InforComp />
 
    </div>
  );
}

export default DashBoard;
