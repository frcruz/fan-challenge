import React, { useState, useCallback} from 'react';
import './App.css';
import Calendar from './Calendar.js'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


function App() {
  const startDate = new Date();
  const [selectedStart, setSelectedStart] = useState('');
  const [endDate, setEndDate] = useState('');
  const [activeDates, setActiveDates] = useState([startDate, endDate]);
  const [hoverEndDate, setHoverEndDate] = useState(startDate);

  const selectDateCallback = (date) => {
    if(date < selectedStart || selectedStart === '') {
      setSelectedStart(date);
    }
    else {
      setEndDate(date);
    }
    setActiveDates([selectedStart, endDate]);
    console.log(selectedStart);
    console.log(endDate);
  }
  
  const onMouseHoverCallback = (date) => {
    if(date > selectedStart) {
      console.log("Hover overed: " + date);
      setHoverEndDate(date);
    }
  }
  return (
    <div>
      {selectedStart.toString()} - {endDate.toString()}
      <Calendar selectDateCallback={selectDateCallback} startDate={startDate} activeDates={[startDate, endDate]} numMonths={6} hoverEndDate={hoverEndDate} onMouseHoverCallback={onMouseHoverCallback}/>
    </div>
  );
}

export default App;
