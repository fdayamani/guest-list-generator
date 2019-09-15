import React from 'react';

class GuestList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { guestList: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/guestList")
            .then(res => res.text())
            .then(res => this.setState({ guestList: res }));
    }

    componentDidMount() {
        this.callAPI();
    }

  render() {
      return (
          <div className="GuestList">
            {this.state.guestList}
          </div>
      );
  }
}

export default GuestList;
