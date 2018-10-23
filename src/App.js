import React, {Component} from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {
  state = {
    inputValue: ''
  };

  onInputChange = (event) => {
    this.setState({inputValue: event.target.value});
  }

  onCharClick = (charIndex) => {
    const arrayValue = this.state.inputValue.split('');
    arrayValue.splice(charIndex, 1);

    this.setState({inputValue: arrayValue.join('')})
  }

  render() {
    const chars = this.state.inputValue.split('').map((char, index) => {
      return (
        <Char char={char}
                       key={index}
                       click={() => this.onCharClick(index)}
                       alt="Click to Remove"
                       />
      );
    })

    return (
      <div className="App">
        <input onChange={this.onInputChange} value={this.state.inputValue}/>
        <p>{this.state.inputValue.length}</p>
        <Validation length={this.state.inputValue.length}></Validation>
        <div>
          {chars}
        </div>
      </div>
    );
  };
}

export default App;
