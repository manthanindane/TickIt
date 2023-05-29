import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Description from './Description';
import SeatSelector from './SeatArrangement';
import Payment from './Payment';
import DateTimeSelector from './DateTimeSelector';
// import Navbar from './components/Navbar';
import { useState } from 'react';
function App() {

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateTimeSelected = (date, time) => {
    setSelectedDate(date);
    setSelectedTime(time);
  }


  return (
    <div className="App"> 
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/description" component={Description} />
        <Route exact path="/SeatSelector" component={SeatSelector} />
        <Route exact path="/Payment" component={Payment} />
        <Route exact path="/DateTimeSelector" component={DateTimeSelector}>
          <DateTimeSelector onDateTimeSelected={handleDateTimeSelected} />
        </Route>
        <Route path="/SeatSelector">
          <SeatSelector selectedDate={selectedDate} selectedTime={selectedTime} />
        </Route>
       {/* < Route path="/Payment" component={Payment} /> */}
      </Switch>
        
      </Router>
      
    </div>
  );
}


export default App;
