import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Navbar from "./components/Navbar";
import "./DateTimeSelector.css";

const DateTimeSelector = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [dateButtonClicked, setDateButtonClicked] = useState(null);
  const [timeButtonClicked, setTimeButtonClicked] = useState(null);
  const history = useHistory();
  console.log(selectedDate);
  console.log(selectedTime);

  const handleDateClick = (date, id) => {
    setSelectedDate(date);
    setDateButtonClicked(id);
  };

  const handleTimeClick = (time, id) => {
    setSelectedTime(time);
    setTimeButtonClicked(id);
  };

  useEffect(() => {
    if (selectedDate && selectedTime) {
      // Pass the selected date and time to SeatSelector component
      // Redirect to SeatSelector component after the current rendering cycle
      setTimeout(() => {
        history.push({
          pathname: '/SeatSelector',
          state: {
            selectedDate: selectedDate,
            selectedTime: selectedTime
          }
        });
      });
    }
  }, [selectedDate, selectedTime, history]);

  return (
    <div className="backdate">
      <Navbar />
      <div>
        <h1 className="headingdt">Select Date and Time</h1>
        <h2></h2>
        <div className="datecon">
          <div>
            <button
              id="date-button-1"
              className={`dbutton ${dateButtonClicked === "date-button-1" ? "clicked" : ""}`}
              onClick={() => handleDateClick("2023-05-27", "date-button-1")}
            >
              27th May 2023
            </button>
            <button
              id="date-button-2"
              className={`dbutton ${dateButtonClicked === "date-button-2" ? "clicked" : ""}`}
              onClick={() => handleDateClick("2023-05-28", "date-button-2")}
            >
              28th May 2023
            </button>
            <button
              id="date-button-3"
              className={`dbutton ${dateButtonClicked === "date-button-3" ? "clicked" : ""}`}
              onClick={() => handleDateClick("2023-05-29", "date-button-3")}
            >
              29th May 2023
            </button>
            <button
              id="date-button-4"
              className={`dbutton ${dateButtonClicked === "date-button-4" ? "clicked" : ""}`}
              onClick={() => handleDateClick("2023-05-30", "date-button-4")}
            >
              30th May 2023
            </button>
            {/* Add more date options as buttons */}
          </div>
        </div>
      </div>
      <br />
      <div className="maintime">
        <div className="timecon">
          <h3>E-SQUARE Oasis (A.C): Solapur:</h3>
          <div>
            <button
              id="time-button-1"
              className={`tbutton ${timeButtonClicked === "time-button-1" ? "clicked" : ""}`}
              onClick={() => handleTimeClick("09:30", "time-button-1")}
            >
              9:30 AM
            </button>
            <button
              id="time-button-2"
              className={`tbutton ${timeButtonClicked === "time-button-2" ? "clicked" : ""}`}
              onClick={() => handleTimeClick("12:30", "time-button-2")}
            >
              12:30 PM
            </button>
            <button
              id="time-button-3"
              className={`tbutton ${timeButtonClicked === "time-button-3" ? "clicked" : ""}`}
              onClick={() => handleTimeClick("16:00", "time-button-3")}
            >
              4:00 PM
            </button>
            <button
              id="time-button-4"
              className={`tbutton ${timeButtonClicked === "time-button-4" ? "clicked" : ""}`}
              onClick={() => handleTimeClick("19:00", "time-button-4")}
            >
              7:00 PM
            </button>
          </div>
        </div>

        <div className="timecon">
  <h3>Bhagwat Uma Mandir: Solapur</h3>
  <div>
    <button
      id="time-button-5"
      className={`tbutton ${timeButtonClicked === "time-button-5" ? "clicked" : ""}`}
      onClick={() => handleTimeClick("09:30", "time-button-5")}
    >
      9:30 AM
    </button>
    <button
      id="time-button-6"
      className={`tbutton ${timeButtonClicked === "time-button-6" ? "clicked" : ""}`}
      onClick={() => handleTimeClick("12:30", "time-button-6")}
    >
      12:30 PM
    </button>
    <button
      id="time-button-7"
      className={`tbutton ${timeButtonClicked === "time-button-7" ? "clicked" : ""}`}
      onClick={() => handleTimeClick("16:00", "time-button-7")}
    >
      4:00 PM
    </button>
    <button
      id="time-button-8"
      className={`tbutton ${timeButtonClicked === "time-button-8" ? "clicked" : ""}`}
      onClick={() => handleTimeClick("19:00", "time-button-8")}
    >
      7:00 PM
    </button>
  </div>
</div>

<div className="timecon">
  <h3>Prabhat Talkies: Solapur</h3>
  <div>
    <button
      id="time-button-9"
      className={`tbutton ${timeButtonClicked === "time-button-9" ? "clicked" : ""}`}
      onClick={() => handleTimeClick("09:30", "time-button-9")}
    >
      9:30 AM
    </button>
    <button
      id="time-button-10"
      className={`tbutton ${timeButtonClicked === "time-button-10" ? "clicked" : ""}`}
      onClick={() => handleTimeClick("12:30", "time-button-10")}
    >
      12:30 PM
    </button>
    <button
      id="time-button-11"
      className={`tbutton ${timeButtonClicked === "time-button-11" ? "clicked" : ""}`}
      onClick={() => handleTimeClick("16:00", "time-button-11")}
    >
      4:00 PM
    </button>
    <button
      id="time-button-12"
      className={`tbutton ${timeButtonClicked === "time-button-12" ? "clicked" : ""}`}
      onClick={() => handleTimeClick("19:00", "time-button-12")}
    >
      7:00 PM
    </button>
  </div>
</div>


        {/* Add more time options as timecon divs */}
      </div>
    </div>
  );
};

export default DateTimeSelector;
