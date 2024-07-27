import React from "react";
import user from "../Asset/user-icon-png.webp";
import img1 from "../Asset/download.jpeg";
import img2 from "../Asset/download (1).jpeg";
import img3 from "../Asset/download (2).jpeg";
import "./Design3.css"

function Design3() {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-center">
      
      <div className=" hide-scrollbar w-full h-1/5  flex items-center overflow-x-auto overflow-y-auto whitespace-nowrap   ">
      <img src={user} alt="logo" width="25%"/>
      <img src={user} alt="logo" width="25%"/>
      <img src={user} alt="logo" width="25%"/>
      <img src={user} alt="logo" width="25%"/>
      <img src={user} alt="logo" width="25%"/>
      <img src={user} alt="logo" width="25%"/>
      </div>

      <div className="hide-scrollbar w-full h-4/5 border-black flex flex-col item-center justify-center overflow-x-auto overflow-y-auto whitespace-nowrap  flex-1 ">
        <img src={img1} alt="logo" width="90%" className="m-auto p-2"/>
        <img src={img2} alt="logo" width="90%" className="m-auto p-2"/>
        <img src={img3} alt="logo" width="90%" className="m-auto p-2"/>
        <img src={img1} alt="logo" width="90%" className="m-auto p-2"/>
        <img src={img2} alt="logo" width="90%" className="m-auto p-2"/>
        <img src={img3} alt="logo" width="90%" className="m-auto p-2"/>
      </div>
    </div>
  );
}

export default Design3;
