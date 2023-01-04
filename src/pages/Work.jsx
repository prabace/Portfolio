import React, { useState } from "react";
import rented from "../Assets/rented.png";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from "react-router-dom";
import history from "../Assets/history.png";


export const Work = () => {
  const [reveal, setReveal] = useState(false);



  const handleHover = (projectName) => {
    setReveal(projectName);
    
  };

  return (
    <div className="h-screen fixed  py-60 text-white mt w-[100%] bg-black">
      <div className="grid mobile:grid-cols-1 tablet:grid-cols-3 animate-scale-up-top">
        <div className="mobile:hidden tablet:flex col-span-2">
          <div className={reveal == "rentedWheels" ? "flex h-screen w-[100%]" : "hidden"}>
            <img src={rented} className="rounded-2xl tablet:max-w-tablet laptop:max-w-laptop desktop:max-w-desktop"/>
          </div>
          <div className={reveal == "projectManager" ? "flex h-screen w-[100%]" : "hidden"}>
            <img src={history} className="rounded-2xl tablet:max-w-tablet laptop:max-w-laptop desktop:max-w-desktop"/>
          </div>
          
        </div>
        <div className="ml-4">
          <h2 className="text-4xl font-ham ">WORKS</h2>

          <div className="flex flex-col mt-10 font-heading text-2xl">
            <ul className="cursor-pointer">
                <div>
              <li onMouseEnter={()=>handleHover('rentedWheels') } onMouseLeave={()=>handleHover(false)}><a href="rentedwheels">{reveal == "rentedWheels" ?<ChevronRightIcon className="forward" ></ChevronRightIcon>:""}Rented Wheels</a></li>
              </div>
              <hr className="my-2 w-[400px]"/>
              <div>
              <li  onMouseOver={()=>handleHover('projectManager') } onMouseLeave={()=>handleHover(false)}><a href="projectManager">{reveal == "projectManager" ?<ChevronRightIcon className="forward"></ChevronRightIcon>:""}Project Manager</a></li>
              </div>
              <hr className="my-2 w-[400px]"/>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
