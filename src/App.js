// create your App component here
import React, {Component} from 'react'

export default class App extends Component{

   state = {
            astronauts: null
        }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(astronauts => {
                this.setState({
                    astronauts: astronauts.people
                })
                // console.log(this.state.astronauts)
            })
    }

    printAstoraunts(){

        let p =[]
        for(const astronaut in this.state.astronauts){
            console.log(<p>{this.state.astronauts[astronaut].name} in {this.state.astronauts[astronaut].craft} spaceship</p>)
            p.push(<p>{this.state.astronauts[astronaut].name} in {this.state.astronauts[astronaut].craft} spaceship</p>)
        }
        return p;
    }

    render(){
        return (<div>
                    {this.printAstoraunts()}
                </div>)
    }

}``