import React from "react";
import rented from "../Assets/rented.png";
import homepage from "../Assets/homepage.png";
import signup from "../Assets/signup.png";
import login from "../Assets/login.png";
import cars from "../Assets/cars.png";
import checkout from "../Assets/checkout.png";
import history from "../Assets/history.png";
import dashboard from "../Assets/dashboard.png";
import add from "../Assets/add.png";
export const Rentedwheels = () => {
  return (
    <div className="bg-black">
      <div className="bg-black text-white w-screen h-[100%] max-w-[1280px] m-auto p-[10px] ">
        <div>
          <img className="-mt-24 rounded-3xl" src={rented}></img>
        </div>
        <div className="mt-[55px]">
          <h1 className="font-ham text-4xl">Rented Wheels.</h1>
          <hr className="my-2" />
        </div>
        <div className="grid grid-cols-4">
          <div className="font-ham text-2xl">
            <h2 className="my-2">Category</h2>
            <h2 className="my-2">Year</h2>
            <h2 className="my-2">Team</h2>
            <h2 className="my-2">Client</h2>
          </div>
          <div className="font-heading text-2xl">
            <h2 className="my-2">Web Development</h2>
            <h2 className="my-2">2022</h2>
            <h2 className="my-2">Paradox</h2>
            <h2 className="my-2">NCIT</h2>
          </div>
          <div className="flex justify-end font-heading text-xl col-span-2">
            <p>
              Rented Wheels is a web-commerce application that allows user to
              rent a vehicle according to their purpose via online payment or
              cash. We offer rating and review system as well as booking history
              for the users. An admin panel is also available for admins to
              check the bookings, reviews, add vehicles and update them.
            </p>
          </div>
        </div>
        <div className="mt-[55px] text-center text-2xl">
        
          <div>
          <p>Login</p>
          <img className="py-4" src={login}></img>
          </div>
          <div>
          <p>Homepage</p>
          <img className="py-4" src={homepage}></img>
          </div>
          <div>
          <p>Categories</p>
          <img className="py-4" src={cars}></img>
          </div>
          <div>
          <p>Checkout</p>
          <img className="py-4" src={checkout}></img>
          </div>
          <div>
          <p>History</p>
          <img className="py-4" src={history}></img>
          </div>
          <div>
          <p>Admin Dashboard</p>
          <img className="py-4" src={dashboard}></img>
          </div>
          <div>
          <p>Admin Panel</p>
          <img className="py-4" src={add}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
