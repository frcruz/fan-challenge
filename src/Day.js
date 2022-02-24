import React, { useState, useEffect, useRef} from 'react';
import "./Day.css"
function Day(props) {
    const classes = ['day'];
    var active = useRef(false);
    function onClick() {
        active.current = true;
        props.selectDateCallback(props.date);
    }

    /*function onMouseEnter(e) {
        if(props.date > start) {
            props.onMouseHoverCallback(props.date);
            e.target.style.background = 'red';
        }
    }
    function onMouseLeave(e) {
        e.target.style.background = '#eee';
    }*/
    useEffect(() => {
        let [start, end] = props.activeDates;
        if(props.date >= start && props.date <= end) {
            active.current = true;
        }
        else {
            active.current = false;
        }
    });
    return (
      <div className={classes + (active.current ? ' active' : '')} onClick={() => onClick()} >
           {props.date.getDate()}
      </div>
    );
  }
  
  export default Day;
