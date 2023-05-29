// Payment.js

import React, { useState } from "react";
import axios from "axios";
import "./Payment.css";
import Navbar from "./components/Navbar";

const Payment = ({ location }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const selectedSeats = location.state.selectedSeats;
  const totalPrice = location.state.totalPrice;
  const selectedDate= location.state.selectedDate;
  const selectedTime= location.state.selectedTime;
  console.log(selectedSeats);
  console.log(totalPrice);
  console.log(selectedDate);
  console.log(selectedTime);
  console.log(name);
  console.log(phone);
  console.log(email);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const seatData = {
      seatNumber: selectedSeats.join(", "),
      name: name,
      phone: phone,
      email: email,
      date: selectedDate,
      time: selectedTime,

    };

    // Make a POST request to store the seat data in the database
    axios
      .post("http://localhost:8000/seats", seatData)
      .then((response) => {
        console.log(response.data.message);
        alert("Payment successful!");
        // Redirect to a success page or perform any other necessary actions
      })
      .catch((error) => {
        console.error("Error storing seat data", error);
        // Handle the error condition
      });
  };

  return (
    <div>
      <Navbar/>
    <div className="paycontainer">
<div className="notmain">
      <h1 className="title">Payment Details</h1>
      <p className="text">
        Total Price ₹<span id="total">{totalPrice}</span>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="fields">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="fields">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </div>
        <div className="fields">
          <label htmlFor="email">Email ID:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default Payment;
