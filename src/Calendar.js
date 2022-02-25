import React, { useEffect, useState, useRef} from 'react';
import Day from './Day.js'
import './Calendar.css'
function Calendar(props) {
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

    function generateMonthHeader(date) {
        return <div>
        <div className="month">
            <ul>
                <li className="prev"><button>&#10094;</button></li>
                <li className="next"><button>&#10095;</button></li>
                <li>{months[date.getMonth()]}<br/><span>{date.getFullYear()}</span></li>
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
    }
    
    function renderMonth(month) {
        
        let days = [];
        let currentMonth = new Date(month);
        for(let j = 0; j < props.numMonths; j++) {
            days.push([]);
            let day = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
            days[j].push(generateMonthHeader(currentMonth));
            if(day.getDay() !== 0) {
                for(let i = 0; i < day.getDay(); i++) {
                    days[j].push(<li key={i - day.getDay()}></li>);
                } 
            }
            while (day.getMonth() === currentMonth.getMonth()) {
                let [start, end] = props.activeDates;
                let active = false;
                if((day >= start && day <= end) || (day.getTime() === start.getTime() && end === '')) {
                    active = true;
                }
                days[j].push(<li key={day.getDate()}><Day active={active} selectDateCallback={props.selectDateCallback} date={new Date(day)} activeDates={props.activeDates} hoverEndDate={props.hoverEndDate} onMouseHoverCallback={props.onMouseHoverCallback}/></li>);
                day.setDate(day.getDate() + 1);
            }
            currentMonth.setMonth(currentMonth.getMonth() + 1);
        }
        return days;
    };

    return (
        <div>
            <ul className="days">{renderMonth(props.startDate)}</ul>
        </div>
      
    );
  }
  
  export default Calendar;