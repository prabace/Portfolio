import React, { useState } from 'react'

const Cursor = () => {
    
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();
  
    window.addEventListener("mousemove", (e) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    });
  
  return (
    <div
    style={{
      left: cursorX + "px",
      top: cursorY+ "px",
    }}
    className="cursor w-[20px] h-[20px] bg-white fixed rounded-[50%] pointer-events-none mix-blend-difference "
  ></div>
  )
}

export default Cursor