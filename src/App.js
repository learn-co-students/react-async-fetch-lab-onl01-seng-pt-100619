// create your App component here
import React, { Component } from "react";

export class App extends Component {
  //constructor
  constructor() {
    super();
    this.state = {
      astronauts: [],
    };
  }

  render() {
    return (
      <div>
        {this.state.astronauts.map((astronaut) => (
          <p>{astronaut.name}</p>
        ))}
      </div>
    );
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((resp) => resp.json())
      .then((data) => {
        //some state
        console.log(data);
        this.setState({ astronauts: data.people });
      });
  }
}

export default App;
