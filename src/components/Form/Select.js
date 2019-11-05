import React from 'react';
import './Form.css';
import Icon from "../Icon/Icon";

const Select = (props) => {
  let classList = "";
  console.log(props);
  if(props.size){

    classList += ` select-${props.size}`;
    console.log(classList);
  }
  return (
    <div className={"select"}>
    <select className={classList}>
    <option>{props.text}</option>
    <div></div></select>
    </div>);
}


export default Select;
