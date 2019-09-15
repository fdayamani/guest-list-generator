import React from 'react';

class GuestAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {guestName: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleAddGuest = this.handleAddGuest.bind(this);
    }

    handleChange(event) {
        this.setState({guestName: event.target.value});
    }

    handleAddGuest(event) {

    }

    render() {
        return (
            <form onSubmit = {this.handleAddGuest}>
                <label>
                    <input type="text" name="name" value={this.state.value} onChange = {this.handleChange}/>
                </label>
                    <input type="submit" value="Add Guest" />
            </form>
        );
    }
}

export default GuestAdder;