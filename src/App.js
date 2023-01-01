import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cursor from "./components/Cursor";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import About from "./pages/About";
import { Work } from "./pages/Work";
import { Rentedwheels } from "./Works/Rentedwheels";
//import { Navbar } from "./components/Navbar";
function App() {


  return (
    
    <div className="">
      <BrowserRouter>
      
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="aboutme" element={<About />}/>
          <Route path="work" element={<Work />}/>
          <Route path="rentedwheels" element={<Rentedwheels/>}/>
        </Routes>
      </BrowserRouter>
       
    </div>
   
  );
}

export default App;
