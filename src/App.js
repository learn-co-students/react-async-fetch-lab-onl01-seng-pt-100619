import React, { Component } from "react";

export default class App extends Component {

    constructor(props) {
        super(props)

    }
    
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(data => console.log(data));
    }
    
    render() {
        return (
            <p>Hello World!</p>
        )
    }


}