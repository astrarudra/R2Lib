import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DropdownExampleMultipleSelection from './components/dropdown'
import DropdownExamplePointing from './components/nestedDD'
class App extends Component {
  render() {
    return (
      <div className="App">
        <DropdownExampleMultipleSelection />
        {[1,2,3,4,5,6].map(o => <div style={{margin: '30px'}}>YO !!!!!</div>)}
        <DropdownExamplePointing />
      </div>
    );
  }
}

export default App;
