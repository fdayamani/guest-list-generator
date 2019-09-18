import React from 'react';

 class Guest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: props.name};
    }

    render() {
        return <div className={"guest" + this.state.name} style = {{background: "grey", margin: "5px", padding: "5px"}}>{this.state.name}</div>
    }

 }

 export default Guest;