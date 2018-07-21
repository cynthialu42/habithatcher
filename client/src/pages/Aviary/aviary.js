import React, { Component } from 'react';
import API from './../../utils/API';
import './Aviary.css';

class Aviary extends Component {
    state = {
        habits:[]
    }

    componentDidMount(){
        this.loadHabits();
    }

    parseStuff(){
        console.log('here');
    }
    loadHabits = () => {
        API.getHabits()
           .then(res => this.setState({ habits: res.data }))
           .then(this.parseStuff())
           .catch(err => console.log(err));
    }

    render(){
        return(
            <div className = 'center-birds mt-5'>
                <h1>The Aviary</h1>
                <div className = 'row mt-5'>
                {this.state.habits.map((habit) => (
                    <div className = 'col-md-3'>
                    {habit.egg.is_hatched === true ?
                    (
                        <div>
                            <img className = 'bird-img' src = {habit.egg.end_img}/>
                            <p>{habit.egg.name}</p>
                        </div>
                    )
                    :
                        <div>
                            <img className = 'bird-img' src = {habit.egg.start_img}/>
                            <p>???</p>
                        </div>
                    }
                    </div>
                    // <div>
                    //         <img src = {habit.egg.end_img} width = '100' height = '100'/>
                    //         <p>{habit.egg.name}</p>
                    //     </div>
                    // console.log(habit.egg.name)
                    // <div>{habit.egg.name}</div>
                ))}
                </div>
            </div>
        )
    }
}

export default Aviary;