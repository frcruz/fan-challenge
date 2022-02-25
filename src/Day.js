import React from 'react';
import "./Day.css"
function Day(props) {
    const classes = ['day'];

    function onClick() {
        props.selectDateCallback(props.date);
    }

    return (
      <div className={classes + (props.active ? ' active' : '')} onClick={() => onClick()} >
           {props.date.getDate()}
      </div>
    );
  }
  
  export default Day;
