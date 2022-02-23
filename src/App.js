import React, { useState } from 'react';
import './App.css';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  function onChange(dates) {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  }
  return (
    <DatePicker selected={startDate} onChange={onChange} monthsShown={6} startDate={startDate} endDate={endDate} selectsRange/>
  );
}

export default App;
