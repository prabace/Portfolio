import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Cursor from "./Cursor";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
 

  const HandleClick = () => {
    setNav(!nav);
  
   
  };


  return (
    <div className={!nav ? "bg-black  w-[100%] h-[100%] pr-12 pt-8 " : "relative w-[100%] h-[100%] bg-black pr-12 pt-8 "}>
      <div
        className="cursor-pointer block grid justify-end"
        onClick={HandleClick}
      >
        {!nav ? (
          <MenuIcon style={{ color: "white" }} />
        ) : (
          <CloseIcon style={{ color: "white" }} />
        )}
      </div>

      <div
        
        className={!nav ? "hidden w-[100%] h-[100%] animate-slide-out-top bg-white z-[1]":
            "w-[100%] h-[100%] animate-slide-in-top4 fixed bg-black z-[2]"
        
        }> 
      
        <ul className="w-[100%] h-[100%] gap-y-10 flex flex-col items-start mobile:ml-20 tablet:ml-40 laptop:ml-60 desktop:ml-80 justify-center mobile:text-[3rem]  tablet:text-[3.8rem] laptop:text-[4.4rem] desktop:text-[5rem] font-ham">
         <li className=" animate-slide-in-top3 text-transparent"><a className="font-outline-2" href='/' >01. Home</a></li>
         <li className=" animate-slide-in-top2 text-transparent"><a className="font-outline-2" href='work' >02. Work</a></li>
          <li className="animate-slide-in-top1 text-transparent"><a className=" font-outline-2" href='aboutme'>03. About</a></li>
          <li className="animate-slide-in-top text-transparent "><a className=" font-outline-2" href='contact'>04. Contact</a></li>
        
        </ul>
      </div>

    
      
    </div>
  );
};
