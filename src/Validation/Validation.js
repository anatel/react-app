import React from 'react';

const validation = (props) => {
  let validationMessage = props.length > 5 ? 'Text long enough' : 'Text too short';
  return (
    <p className="ValidationComponent">
      {validationMessage}
    </p>
  );
}

export default validation;