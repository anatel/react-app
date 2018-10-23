import React from 'react';
import './Char.css';

const char = (props) => {
  return (
    <div className="CharComponent" title={props.alt} onClick={props.click}>
      {props.char}
    </div>
  );
}

export default char;