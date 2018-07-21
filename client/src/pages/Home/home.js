import React, { Component } from 'react';
import API from "../../utils/API";
import Test from './../../components/test';
import moment from 'moment';
import Instructions from './../../components/Instructions/index';
import './home.css';
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

    updateCount(id, currentCount, iteration, hatchingNumber){
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
        }
        if(parseInt(hatchingNumber)-1 <= parseInt(currentCount)){
            console.log('hatched')
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

    handleDelete= id => {
        API.deleteHabit(id).then(res => this.loadHabits());
      };

    render(){
        return(
            <div>
                
                {/* <Instructions /> */}
                {this.state.habits.length === 0 ?
                    <Instructions/>
                    :
                    (
                        <div className = 'row'>
                        {this.state.habits.map(habit => (
                            <div className = 'col-lg-4 col-md-6 mt-5'>
                                <div className = 'card text-white no-border'>
                                    {habit.count < habit.egg.hatching_number ? 
                                        <img className = 'card-img bird-img' src = {habit.egg.start_img}/>
                                        :
                                        <img className = 'card-img bird-img' src = {habit.egg.end_img}/>
                                        
                                    }
                                    <div className = 'card-img-overlay test text-right'>
                                        <a className = 'delete-btn' onClick={() => this.handleDelete(habit._id)}><i class="delete-btn fas fa-times fa-lg"></i></a>
                                        <div className = 'card-title text-center habit-name'>{habit.name}</div>
                                        <div className = 'text-center habit-description'>{habit.description}</div>
                                        <div className = 'text-center habit-counter'>{habit.count}/{habit.iteration}</div>
                                        <div className = 'text-center'>
                                            {habit.count === habit.iteration ? 
                                                <button className = 'btn add-btn' disabled = 'true' onClick = {() => this.updateCount(habit._id, habit.count, habit.iteration, habit.egg.hatching_number)}>Complete!</button>
                                                :
                                                <button className = 'btn add-btn' onClick = {() => this.updateCount(habit._id, habit.count, habit.iteration, habit.egg.hatching_number)}><i class="fas fa-plus "></i></button>
                                            }
                                        </div>
                                        <div className = 'text-muted bottom-text text-center'>Created {moment(habit.date).fromNow('dd')} ago</div>
                                        {/* <div className = 'row hi'>
                                            <div className = 'col-12 delete-row'>
                                                <a className = 'delete-btn' onClick={() => this.handleDelete(habit._id)}><i class="delete-btn fas fa-times fa-lg"></i></a>
                                            </div>
                                            <div className = 'col-12'>
                                                <h5 className = 'card-title'>{habit.name}</h5>
                                            </div>
                                            <div className = 'col-12'>
                                                <p>Push code to github twice a day</p>
                                            </div>
                                            <div className= 'col-12'>
                                                {habit.count}/{habit.iteration}
                                            </div>
                                            <div className = 'col-12'>
                                                {habit.count === habit.iteration ? 
                                                    <button className = 'btn btn-primary' disabled = 'true' onClick = {() => this.updateCount(habit._id, habit.count, habit.iteration, habit.egg.hatching_number)}>Complete!</button>
                                                    :
                                                    <button className = 'btn btn-primary' onClick = {() => this.updateCount(habit._id, habit.count, habit.iteration, habit.egg.hatching_number)}>+</button>
                                                }
                                            </div>
                                        
                                       
                                            <div className = 'col-12'>
                                                <p className = 'text-muted bottom-text'>Created {moment(habit.date).fromNow('dd')} ago</p>
                                            </div>
                                        </div> */}
                                        {/* <h5 className = 'card-title'>{habit.name}</h5>
                                        {habit.count === habit.iteration ? 
                                            <button disabled = 'true' onClick = {() => this.updateCount(habit._id, habit.count, habit.iteration, habit.egg.hatching_number)}>Complete!</button>
                                            :
                                            <button onClick = {() => this.updateCount(habit._id, habit.count, habit.iteration, habit.egg.hatching_number)}>+</button>

                                        }
                                        <button onClick={() => this.handleDelete(habit._id)} className="btn">Delete</button>
                                        <p className = 'text-muted bottom-text'>Date: {moment(habit.date).fromNow('dd')}</p> */}
                                    </div>
                                {/* <p>Name: {habit.name}</p>
                                <p>Count: {habit.count}</p>
                                <p>Iteration: {habit.iteration}</p>
                                <p>Date: {moment(habit.date).format('ll')}</p>
                                <p>Complete? {habit.complete}</p>
                                <p>Egg name: {habit.egg.name}</p>
                                <p>Egg hatch number: {habit.egg.hatching_number}</p> */}
                                
                                

                                </div>
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