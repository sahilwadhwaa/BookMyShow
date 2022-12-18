import React from "react";
import { SeatSlot } from "./SeatSlot";
//component renders Number of seats data from SeatSlots.js
//name of seats, handleSeats function are passed as props to SeatSlots.js

export const Seats = ({ seats, cb }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {seats.map((el, i) => (
        <SeatSlot seatName={el} key={i} cb={cb} />
      ))}
    </div>
  );
};
