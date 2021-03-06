import React, { Component } from "react";
import Instructions from "../../components/Instructions";
import HabitModal from '../../components/HabitModal';
import API from "../../utils/API";
import './Home.css';

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

                        <div className = 'col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-5'>
                            <div className = 'card text-light no-border'>

                                {habit.count < habit.egg.hatching_number ? 
                                    <img className = 'card-img bird-img ' src = {habit.egg.start_img}/>
                                    :
                                    <img className = 'card-img bird-img ' src = {habit.egg.hatch_img}/>
                                    
                                }
                                <div className = 'card-img-overlay test text-center'>
                                    {habit.count === habit.iteration ?
                                    <div className = 'card-title text-center test-name teal-text'>
                                    {habit.name}
                                    </div>
                                    :
                                    <div className = 'card-title text-center test-name test-color enlarge' >
                                        {habit.name}
                                    </div>
                                    }
                                    
                                    {/* <div className = 'text-center habit-description'>{habit.description}</div> */}
                                    <div className = 'text-center counter-center'>
                                        {habit.count === habit.iteration ?
                                            <div className = 'text-center test-counter teal-text'>{habit.count}/{habit.iteration}</div>
                                            :
                                            <div className = 'text-center test-counter test-color enlarge' >{habit.count}/{habit.iteration}</div>
                                        }
                                    </div>
                                    <div className = 'text-center btn-section'>
                                        {habit.count === habit.iteration ? 
                                            <button className = 'btn add-btn btn-lg' disabled = 'true' onClick = {() => this.updateCount(habit._id, habit.count, habit.iteration, habit.egg.hatching_number)}>Complete!</button>
                                            :
                                            <button className = 'btn add-btn' onClick = {() => this.updateCount(habit._id, habit.count, habit.iteration, habit.egg.hatching_number)}><i class="fas fa-plus fa-2x"></i></button>
                                        }                                         

                                    </div>
                                    {/* <a className = 'delete-btn' onClick={() => this.handleDelete(habit._id)}><i class="delete-btn fas fa-times fa-lg"></i></a> */}
                                    <div className = 'text-center btn-section' data-toggle="modal" data-target={"#" + habit._id}><i class="info-btn far fa-question-circle fa-lg"></i></div>
                                    <HabitModal
                                        habit_id = {habit._id}
                                        habit_name = {habit.name}
                                        habit_description = {habit.description}
                                        date = {habit.date}
                                        handleDelete = {this.handleDelete}
                                        iteration = {habit.iteration}
                                    />
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
