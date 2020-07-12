// create your App component here
import React from "react";

export default class App extends React.Component {

    constructor() {
        super()
        this.state = {astronauts: []}
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json").then(resp => resp.json()).then(json => this.setState({astronauts: json.people}))
    }

    render() {
        return(
            <div>
                {this.state.astronauts.map(person => person.name)}
            </div>
        )
    }
}