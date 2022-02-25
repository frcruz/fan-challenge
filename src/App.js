import React, { useState } from 'react';
import './App.css';
import Calendar from './Calendar.js'

import "react-datepicker/dist/react-datepicker.css";


function App() {
  const startDate = new Date();
  const [selectedStart, setSelectedStart] = useState(new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()));
  const [endDate, setEndDate] = useState('');

  const selectDateCallback = (date) => {
    if(date < selectedStart || selectedStart === '') {
      setSelectedStart(date);
      setEndDate('');
    }
    else {
      setEndDate(date);
    }
  }
  
  return (
    <div>
      {selectedStart.toString()} - {endDate.toString()}
      <Calendar selectDateCallback={selectDateCallback} startDate={startDate} activeDates={[selectedStart, endDate]} numMonths={6}/>
    </div>
  );
}

export default App;
