import React from 'react';
import './App.css';
import GuestAdder from './GuestAdder'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }

  render() {
  return (
  <div className="App">
      <header className="App-header">
        <GuestAdder/>
        <p className="App-intro">{this.state.apiResponse}</p>
      </header>
    </div>
    );
  }
}

export default App;
