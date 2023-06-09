import React,{ useState} from 'react'
import Cursor from '../components/Cursor';
import { Navbar } from '../components/Navbar';
import {motion as m} from 'framer-motion'
export const Home = () => {

  return (

    <div
    
    className="w-screen h-[100%]  flex justify-center fixed items-center bg-black">
      
        <div className="">
          <h2 className=" animate-slide-in-top sub-heading mobile:text-[1rem] tablet:text-2xl laptop:text-3xl desktop:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-slate-200 to-slate-700 font-extrabold font-heading">
            Hi, my name is
          </h2>
          
          <p className="animate-slide-in-top2 heading font-outline-2 mobile:font-outline-1 mobile:text-[1.6rem] tablet:text-[2.5rem] laptop:text-[4rem] desktop:text-[5rem] text-transparent bg-clip-text  font-extrabold font-subheading">
            PRABESH POKHAREL.
          </p>
          <p className="animate-slide-in-top1 heading font-outline-2 mobile:leading-[40px]  mobile:font-outline-1 mobile:text-[1.6rem] tablet:text-[2.5rem] laptop:text-[4rem] desktop:text-[5rem] leading-[70px] text-transparent bg-clip-text  font-extrabold font-subheading">
            BUT YOU CAN CALL ME ACE.
          </p>
         
          <h2 className="animate-slide-in-top sub-heading text-center mobile:leading-[30px] mobile:text-[1rem] tablet:text-2xl tablet:leading-[40px] laptop:leading-[80px] laptop:text-3xl desktop:text-4xl desktop:leading-[90px] text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-slate-200 to-slate-700 font-extrabold font-heading">
            I am a UI/UX designer & front-end web developer.
          </h2>

       
         
        </div>
      </div>
    
  )
}
