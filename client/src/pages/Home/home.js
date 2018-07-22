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
                                <div className = 'card text-light no-border'>
                                    {habit.count < habit.egg.hatching_number ? 
                                        <img className = 'card-img bird-img' src = {habit.egg.start_img}/>
                                        :
                                        <img className = 'card-img bird-img' src = {habit.egg.hatch_img}/>
                                        
                                    }
                                    <div className = 'card-img-overlay test text-center'>
                                        <div className = 'card-title text-center habit-name'>{habit.name}</div>
                                        {/* <div className = 'text-center habit-description'>{habit.description}</div> */}
                                        <div className = 'text-center counter-center'>
                                            <div className = 'text-center habit-counter'>{habit.count}/{habit.iteration}</div>
                                        </div>
                                        <div className = 'text-center btn-section'>
                                            {habit.count === habit.iteration ? 
                                                <button className = 'btn add-btn' disabled = 'true' onClick = {() => this.updateCount(habit._id, habit.count, habit.iteration, habit.egg.hatching_number)}>Complete!</button>
                                                :
                                                <button className = 'btn add-btn' onClick = {() => this.updateCount(habit._id, habit.count, habit.iteration, habit.egg.hatching_number)}><i class="fas fa-plus "></i></button>
                                            }
                                        </div>
                                        <a className = 'delete-btn' onClick={() => this.handleDelete(habit._id)}><i class="delete-btn fas fa-times fa-lg"></i></a>

                                        {/* <div className = 'text-muted bottom-text text-center'>Created {moment(habit.date).fromNow('dd')} ago</div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    )
                }   
            </div>
        )
    }
}

export default Home;