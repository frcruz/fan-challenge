import React, { useState, useEffect, useRef} from 'react';
import "./Day.css"
function Day(props) {
    const [classes, setClasses] = useState(['day']);
    var active = useRef(false);
    function onClick() {
        let temp = classes;
        temp.push('active');
        setClasses(temp);
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
            console.log(props.hoverEndDate)
            console.log(props.date);
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
