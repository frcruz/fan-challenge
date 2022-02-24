import React, { useEffect, useState } from 'react';
import Day from './Day.js'
import './Calendar.css'
function Calendar(props) {
    const daysOfWeek =  {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    };
    const months = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    };
    const [startDate, setStartDate] = useState(props.startDate);
    const [header, setheader] = useState(
        <div>
            <div className="month">
                <ul>
                    <li className="prev"><button>&#10094;</button></li>
                    <li className="next"><button>&#10095;</button></li>
                    <li>{months[startDate.getMonth()]}<br/><span>{startDate.getFullYear()}</span></li>
                </ul>
            </div>
            <ul className="weekdays">
                <li>Sunday</li>
                <li>Monday</li>
                <li>Tuesday</li>
                <li>Wednesday</li>
                <li>Thursday</li>
                <li>Friday</li>
                <li>Saturday</li>
                
            </ul>
        </div>
    );
    function renderMonth(month) {
        
        let days = [];
        let months = new Date(month);
        for(let j = 0; j < props.numMonths; j++) {
            days.push([]);
            let day = new Date(months.getFullYear(), months.getMonth(), 1);
            days[j].push(header);
            if(day.getDay() !== 0) {
                for(let i = 0; i < day.getDay(); i++) {
                    days[j].push(<li key={i - day.getDay()}></li>);
                } 
            }
            while (day.getMonth() === months.getMonth()) {
                days[j].push(<li key={day.getDate()}><Day selectDateCallback={props.selectDateCallback} date={new Date(day)} activeDates={props.activeDates} hoverEndDate={props.hoverEndDate} onMouseHoverCallback={props.onMouseHoverCallback}/></li>);
                day.setDate(day.getDate() + 1);
            }
            months.setMonth(months.getMonth() + 1);
            //console.log(months);
        }
        //console.log(days);
        return days;
    };
    useEffect(() => {
        renderMonth(startDate);
    });
    return (
        <div>
            <ul className="days">{renderMonth(startDate)}</ul>
        </div>
      
    );
  }
  
  export default Calendar;