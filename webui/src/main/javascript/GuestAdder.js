import React from 'react';
import nanoajax from 'nanoajax';

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
        nanoajax.ajax({
            url: "/api/guestList",
            method: 'POST',
            body: {name: this.state.guestName}
        },
        function(code, responseTest) {
            if (code >=200 && code < 300) {
                console.log('A guest was added: ' + this.state.guestName) ;

            } else {

            }
        });
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