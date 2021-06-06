import React, {Component} from 'react';
import CardList from '../components/Cardlist';
import {robots} from '../robot';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
class App extends Component{
    constructor(){
        super();
        this.state ={
                robots :robots,
                searchfield: ''
        }
    }

    componenetDidMount(){
        fetch("https://jsonplacholder.typicode.com/users").then(response=>
        {
            return response.json();
        }).then(users=> {
            this.setState({robots:users})
        })
    }

    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value})
    }

    render(){
        const filteredRobot = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
       return(
        <div className = "tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <Scroll>
        <CardList robots = {filteredRobot} />
        </Scroll>
        </div>
     );
    }
}

export default App;