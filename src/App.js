import React, {Component} from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      {id: 'g12h', name: 'Anat', age: 29},
      {id: 'g2f3', name: 'Roei', age: 31},
      {id: '8sh', name: 'Robi', age: 2}
    ],
    showPersons: false
  };

  deletePersonHandler(personIndex) {
    const persons = [...this.state.people];
    persons.splice(personIndex, 1);
    this.setState({
      people: persons
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => p.id === id);

    const person = {...this.state.people[personIndex]};
    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState({
      people
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      btnClass = classes.red;
      persons = (
        <div>
          {this.state.people.map((person, index) => (
            <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          ))}
        </div>
      )
    }

    const assignedClasses = [];
    if (this.state.people.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if (this.state.people.length === 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <p className={assignedClasses.join(' ')}>Hi, I'm a React App</p>
        <button onClick={this.togglePersonsHandler} className={btnClass}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  };
}

export default App;

