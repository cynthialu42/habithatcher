import React, { Component } from 'react';
import API from "../../utils/API";
import Test from './../../components/test';
import moment from 'moment';
import Instructions from './../../components/Instructions';
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

    updateCount(id, currentCount, iteration){
        // let testHabit = this.state.habits.filter(habit => habit._id === id);
        // console.log(testHabit);
        // let updatedCount = 1 + parseInt(testHabit[0].count);
        // console.log("count: ", updatedCount);
        // this.setState()
        let updatedCount = parseInt(currentCount) + 1;
        let isComplete = false;
        let hatched = false;
        if (updatedCount === iteration){
            console.log('Habit complete')
            isComplete = true;
            hatched = true;
        }
        
        let countData = {
            count: updatedCount,
            complete: isComplete,
            'egg.is_hatched': hatched
        }
        console.log(countData);
        API.updateCount(id, countData)
            .then(res => this.loadHabits())
            .catch(err => console.log(err));

        // API.getHabit(id)
    }

  

    render(){
        return(
            <div>
                
                {/* <Instructions /> */}
                {this.state.habits.length === 0 ?
                    <Instructions/>
                    :
                    (
                        <div>
                        {this.state.habits.map(habit => (
                            <div>
                                <p>Name: {habit.name}</p>
                                <p>Count: {habit.count}</p>
                                <p>Iteration: {habit.iteration}</p>
                                <p>Date: {moment(habit.date).format('ll')}</p>
                                <p>Complete? {habit.complete}</p>
                                <p>Egg name: {habit.egg.name}</p>
                                <p>Egg hatch number: {habit.egg.hatching_number}</p>
                                {habit.count < habit.egg.hatching_number ? 
                                    <img src = {habit.egg.start_img} width = '100' height = '100'/>
                                    :
                                    <img src = {habit.egg.end_img} width = '100' height = '100'/>
                                      
                                }
                                {habit.count === habit.iteration ? 
                                    <button disabled = 'true' onClick = {() => this.updateCount(habit._id, habit.count, habit.iteration)}>Complete!</button>
                                    :
                                    <button onClick = {() => this.updateCount(habit._id, habit.count, habit.iteration)}>+</button>
        
                                }
                                <hr/>
                            </div>
                        ))}
                        </div>
                    )
                }
                {/* {this.state.habits.map(habit => (
                    <div>
                        <p>Name: {habit.name}</p>
                        <p>Count: {habit.count}</p>
                        <p>Iteration: {habit.iteration}</p>
                        <p>Date: {moment(habit.date).format('ll')}</p>
                        <p>Complete? {habit.complete}</p>
                        <p>Egg name: {habit.egg[0].name}</p>
                        <p>Egg hatch number: {habit.egg[0].hatching_number}</p>
                        {habit.count < habit.egg[0].hatching_number ? 
                            <img src = {habit.egg[0].start_img} width = '100' height = '100'/>
                            :
                            <img src = {habit.egg[0].end_img} width = '100' height = '100'/>
                              
                        }
                        {habit.count === habit.iteration ? 
                            <button disabled = 'true' onClick = {() => this.updateCount(habit._id, habit.count, habit.iteration)}>Complete!</button>
                            :
                            <button onClick = {() => this.updateCount(habit._id, habit.count, habit.iteration)}>+</button>

                        }
                        <hr/>
                    </div>
                ))} */}
            </div>
        )
    }
}

export default Home;