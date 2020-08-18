// create your App component here
import React from 'react'

class App extends React.Component {
    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            peopleInSpace: data.people.map(people => people.name).join(', ')
        })
    }

    render() {
        return(
            <div>
                People In Space: 
                <br>
                {this.state.peopleInSpace}
                </br>
            </div>
        )
    }
}

export default App;