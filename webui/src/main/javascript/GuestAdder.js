import React from 'react';

class GuestAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleAddGuest = this.handleAddGuest.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleAddGuest(event) {
        event.preventDefault();
        fetch("http://localhost:9000/addGuest", {
                method: "post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(this.state)}
            );
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleAddGuest(event)}>
                <label>
                    <input type="text" name="name" onChange = {(event) => this.handleChange(event)}/>
                </label>
                    <input type="submit" value="Add Guest"/>
            </form>
        );
    }
}

export default GuestAdder;