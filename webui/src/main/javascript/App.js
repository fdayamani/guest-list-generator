import React from 'react';
import './App.css';
import GuestAdder from './GuestAdder'
import GuestList from './GuestList'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

  render() {
  return (
  <div className="App">
      <div className="App-header">
        <GuestAdder/>
        <GuestList/>
      </div>
    </div>
    );
  }
}

export default App;
