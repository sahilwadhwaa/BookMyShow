import React from "react";
//importing useState to maintain state of the hover
import { useState } from "react";

const Slots = ({ label, cb, movieData }) => {
  //using hover state to keep track of hover 
  //setHover=true if mouse is hovering on an element, else false
  //if setHover=true, change the color of the element
  //onClick ensures the color of the element will be permanenty changed if selected
  const [hover, setHover] = useState(false);
  return (
    <div
      className="slot-container flex"
      onMouseEnter={()=>{
        setHover(true);
      }}
      onMouseLeave={()=>{
        setHover(false);
      }}
      onClick={() => cb(label)}
      style={{ backgroundColor: `${movieData === label || hover ? "coral" : "white"}` }}
      
    >
      <p>{label}</p>
    </div>
  );
};

export default Slots;
