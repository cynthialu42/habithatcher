import React, { Component } from 'react';
import API from "../../utils/API";



class Home extends Component {
    state ={
        habits: []
    }

    componentDidMount(){
        this.loadHabits();
    }

    loadHabits = () => {
        API.getHabits()
           .then(res => this.setState({ habits: res.data }))
           .catch(err => console.log(err));
    }

    render(){
        return(
            <div>HOME PAGE
                {this.state.habits.map(habit => (
                    <div>
                        <p>Name: {habit.name}</p>
                        <p>Count: {habit.count}</p>
                        <p>Iteration: {habit.iteration}</p>
                        <p>Date: {habit.date}</p>
                        <p>Complete? {habit.complete}</p>
                        <p>Egg name: {habit.egg[0].name}</p>
                        <p>Egg hatch number: {habit.egg[0].hatching_number}</p>
                        {habit.count < habit.egg[0].hatching_number ? 
                            <img src = {habit.egg[0].start_img} width = '100' height = '100'/>
                            :
                            <img src = {habit.egg[0].end_img} width = '100' height = '100'/>
                        }
                        
                    </div>
                ))}
            </div>
        )
    }
}

export default Home;