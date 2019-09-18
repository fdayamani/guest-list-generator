import React from 'react';
import Guest from './Guest'

class GuestList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { guestList: [] };
    }

    fetchGuests() {
        fetch("http://localhost:9000/guestList")
              .then(res => res.json())
              .then(res => this.setState({ guestList: res }));
    }

    componentDidMount() {
        this.fetchGuests();
        this.timer = setInterval(() => this.fetchGuests(), 1000)
    }

    componentWillUnmount() {
        this.timer = null;
    }

  render() {
      return (
          <div className="GuestList" style = {{textAlign: "center", padding: "10px", width: "max-content"}}>
            {this.state.guestList.map((guest) => <Guest name={guest.name}/>)}
          </div>
      );
  }
}

export default GuestList;
