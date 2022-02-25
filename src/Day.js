import React, { useState, useEffect, useRef} from 'react';
import "./Day.css"
function Day(props) {
    const classes = ['day'];
    const [active, setActive] = useState(props.active);

    function onClick() {
        setActive(true);
        props.selectDateCallback(props.date);
    }

    return (
      <div className={classes + (props.active ? ' active' : '')} onClick={() => onClick()} >
          {active}
           {props.date.getDate()}
      </div>
    );
  }
  
  export default Day;
