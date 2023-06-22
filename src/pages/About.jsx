import React from "react";
import photo from "../Assets/photo.jpg";
import { Timeline } from "../components/Timeline";
import { Progress } from "../components/Progress";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();
AOS.refresh();

const About = () => {
  return (
    <div className="w-[100%] h-[100%] tablet:px-10 laptop:px-20 tablet:py-20  bg-black text-white ">
      <div className="grid laptop:grid-cols-3 mobile:grid-cols-1 ">
        <div className="tablet:ml-[100px] laptop:ml-[0px] mobile:ml-[10px] mobile:mr-0 tablet:mr-20  col-span-2 justify-start">
          <div className="">
            <h1 className="font-ham mb-2 text-[3.5rem]">ABOUT</h1>
          </div>
          <hr />
          <div
            data-aos="zoom-in-down"
            data-aos-offset="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
            className="mt-8"
          >
            <p className=" font-heading text-2xl">
              Hey, my name is Prabesh Pokharel. I’m a graphic designer &
              front-end web developer from Nepal. I’m also passionate about
              music, arts and football. I also make portraits and universes
              around what I listen to and I’m always curious to learn more when
              it comes to new technologies and creative coding. YNWA (yea, I
              support Liverpool :) )
            </p>
          </div>

          <div
            data-aos="zoom-in-down"
            data-aos-offset="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
            className=" grid pad:grid-cols-1 laptop:grid-cols-2 mt-[100px] "
          >
            <div className="flex text-xl flex-col gap-y-4">
              <div>Birthday: 1st October, 1999</div>
              <hr className="w-[300px]" />
              <div>Website: prabeshpokharel.netlify.app</div>
              <hr className="w-[300px]" />
              <div>Degree: B.E in Software Engineering</div>
              <hr className="w-[300px]" />
              <div className="mb-3">City: Nikoshera, Bhaktapur</div>
            </div>
            <hr className="mobile:w-[300px] tablet:w-[300px] pad:[300px] laptop:hidden desktop:hidden my-2" />
            <div className="flex  text-xl flex-col gap-y-4">
              <div>Age: 23</div>
              <hr className="w-[300px]" />
              <div>Email: pokharel.prabesh00@gmail.com</div>
              <hr className="w-[300px]" />
              <div>Phone: +977 9861444092</div>
              <hr className="w-[300px]" />
              <div>Freelance: Available </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-down"
            data-aos-offset="600"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
            className="mt-[100px]"
          >
            <Progress />
          </div>
          <div
            data-aos="zoom-in-down"
            data-aos-offset="600"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
            className="mt-[100px]"
          >
            <Timeline />
          </div>
        </div>
        <div className="  flex sticky justify-center ">
          <img
            alt="profile"
            className="desktop:max-w-xl laptop:max-w-md pad:max-w-sm fixed rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
            src={photo}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
