// create your App component here
import React from 'react'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {data: []}
    }

    render() {
        return (
            <div>
                {this.state.data.map(person => {
                    return <h2>{person.name}</h2>
                    })}
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(json => {
                this.setState({data: json.people})
            })
    }

}