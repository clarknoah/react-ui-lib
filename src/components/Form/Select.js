import React from 'react';
import './Form.css';


const Select = (props) => {
  let classList = "";
  console.log(props);
  if(props.size){
    console.log("there is size");
    classList += ` select-${props.size}`;
    console.log(classList);
  }
  return (<select className={classList}>
    <option >Select</option>
    </select>);
}


export default Select;
