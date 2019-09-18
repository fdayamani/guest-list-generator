import React from 'react';
import Guest from './Guest'

class GuestList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { guestList: [] };
    }

    componentDidMount() {
        fetch("http://localhost:9000/guestList")
              .then(res => res.json())
              .then(res => this.setState({ guestList: res }));
    }

  render() {
      return (
          <div className="GuestList">
            {this.state.guestList.map((guest) => <Guest name={guest.name}/>)}
          </div>
      );
  }
}

export default GuestList;
