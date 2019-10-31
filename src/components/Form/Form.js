import React from 'react';
import './Form.css';

const Input = (props) => {

  let classList = '';
  let placeholder = props.placeholder ? props.placeholder : props.label;
  if(props.size){
    classList += ` input-${props.size}`;
  }

  if(!props.placeholder){

  }

  return (
    <div>
    <div className="input-label">{props.label}</div>
    <input className={classList} placeholder={placeholder} label={props.label} />
    </div>
  )
}



export default Input;
