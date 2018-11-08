import React, {Fragment} from 'react';
import classes from './Cockpit.less';

const cockpit = ( props ) => {
  const assignedClasses = [];
  let btnClass = classes.button;

  if (props.showPersons) {
    btnClass = [classes.button, classes.red].join(' ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push( classes.red ); // classes = ['red']
  }
  if ( props.persons.length <= 1) {
    assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
  }

  return (
    <Fragment>
      <p className={assignedClasses.join(' ')}>{props.appTitle}</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </Fragment>
  );
};

export default cockpit;