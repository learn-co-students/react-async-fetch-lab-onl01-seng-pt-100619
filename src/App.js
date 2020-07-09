import React, {Component} from 'react'

class App extends Component {
    
    constructor() {
        super()
        this.state = {
            peopleInSpace: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
        })
    }

    render() {
        return (
            <div>
                <h1>People in Space:</h1>
                <ul>
                    {this.state.peopleInSpace.map(person => <li>{person.name}</li>)}
                </ul>
                
            </div>
        )
    }

}

export default App
