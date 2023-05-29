// SeatSelector.js

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./SeatArrangement.css";

const SeatSelector = ({ location }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const history = useHistory();
  const selectedDate= location.state.selectedDate;
  const selectedTime= location.state.selectedTime;

  const handleSeatClick = (seat) => {
    const isSelected = selectedSeats.includes(seat);
    let updatedSeats = [];

    if (isSelected) {
      updatedSeats = selectedSeats.filter(
        (selectedSeat) => selectedSeat !== seat
      );
    } else {
      updatedSeats = [...selectedSeats, seat];
    }

    setSelectedSeats(updatedSeats);
    setTotalPrice(updatedSeats.length * 250);
  };

  const handleProceed = () => {
    history.push({
      pathname: "/Payment",
      state: {
        selectedSeats: selectedSeats,
        totalPrice: totalPrice,
        selectedDate: selectedDate,
        selectedTime: selectedTime
      },
    });
  };

  return (
    <div className="container">
      <h3 className="headingseat"></h3>
      {/* Seat selection rows */}
      {/* Rest of your JSX code for rendering seat rows */}
      <div className="row-container">
        {/* Seat rows */}
        <div className="row">
    {[
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "A8",
      "A9",
      "A10",
      "A11",
      "A12",
      "A13",
      "A14",
      "A15",
      "A16",
    ].map((seat) => (
      <div
        key={seat}
        className={`seat ${selectedSeats.includes(seat) && "selected"}`}
        onClick={() => handleSeatClick(seat)}
      >
        {seat}
      </div>
    ))}
  </div>
  <div className="row">
    {[
      "B1",
      "B2",
      "B3",
      "B4",
      "B5",
      "B6",
      "B7",
      "B8",
      "B9",
      "B10",
      "B11",
      "B12",
      "B13",
      "B14",
      "B15",
      "B16",
    ].map((seat) => (
      <div
        key={seat}
        className={`seat ${selectedSeats.includes(seat) && "selected"}`}
        onClick={() => handleSeatClick(seat)}
      >
        {seat}
      </div>
    ))}
  </div>
  <div className="row">
    {[
      "C1",
      "C2",
      "C3",
      "C4",
      "C5",
      "C6",
      "C7",
      "C8",
      "C9",
      "C10",
      "C11",
      "C12",
      "C13",
      "C14",
      "C15",
      "C16",
    ].map((seat) => (
      <div
        key={seat}
        className={`seat ${selectedSeats.includes(seat) && "selected"}`}
        onClick={() => handleSeatClick(seat)}
      >
        {seat}
      </div>
    ))}
  </div>
  <div className="row">
    {[
      "D1",
      "D2",
      "D3",
      "D4",
      "D5",
      "D6",
      "D7",
      "D8",
      "D9",
      "D10",
      "D11",
      "D12",
      "D13",
      "D14",
      "D15",
      "D16",
    ].map((seat) => (
      <div
        key={seat}
        className={`seat ${selectedSeats.includes(seat) && "selected"}`}
        onClick={() => handleSeatClick(seat)}
      >
        {seat}
      </div>
    ))}
  </div>
  <div className="row">
    {[
      "E1",
      "E2",
      "E3",
      "E4",
      "E5",
      "E6",
      "E7",
      "E8",
      "E9",
      "E10",
      "E11",
      "E12",
      "E13",
      "E14",
      "E15",
      "E16",
    ].map((seat) => (
      <div
        key={seat}
        className={`seat ${selectedSeats.includes(seat) && "selected"}`}
        onClick={() => handleSeatClick(seat)}
      >
        {seat}
      </div>
    ))}
  </div>
  <div className="row">
    {[
      "F1",
      "F2",
      "F3",
      "F4",
      "F5",
      "F6",
      "F7",
      "F8",
      "F9",
      "F10",
      "F11",
      "F12",
      "F13",
      "F14",
      "F15",
      "F16",
    ].map((seat) => (
      <div
        key={seat}
        className={`seat ${selectedSeats.includes(seat) && "selected"}`}
        onClick={() => handleSeatClick(seat)}
      >
        {seat}
      </div>
    ))}
  </div>
    <h2 className="screenhere">__________Screen Here__________</h2>
      </div>
      {/* Proceed button */}
      <div className="proceed">
        <button className="proceedbtn" onClick={handleProceed}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default SeatSelector;
