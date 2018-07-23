import React, { Component } from 'react';
import API from './../../utils/API';
import './Aviary.css';
import Modal from './../../components/Modal';
import ProgressBar from './../../components/ProgressBar';

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
            <div className = 'container center-birds mt-5'>
                <h1>The Aviary</h1>
                {/* <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <img src = "https://cdn.audubon.org/cdn/farfuture/hSDgO-dX1na9VZajH8LUXXZbZFW0DYjcPLDuabM2-1c/mtime:1486670171/sites/default/files/styles/nas_bird_teaser_illustration/public/4995_Sibl_9780307957900_art_r1.jpg?itok=js0TRBkE" width = '100' height = '100'/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div> */}
                <div className = 'row mt-5'>
                {this.state.habits.map((habit) => (
                    <div className = 'col-md-3 mb-5'>
                    {habit.egg.is_hatched === true ?
                    (
                        <div>
                            <img className = 'bird-img' src = {habit.egg.end_img} data-toggle="modal" data-target={"#" + habit._id}/>
                            <p>{habit.egg.name}</p>
                            <Modal 
                                image = {habit.egg.end_img} 
                                bird_name = {habit.egg.name} 
                                habit_id = {habit._id}
                                habit_name = {habit.name}
                                habit_description = {habit.description}
                                bird_description = {habit.egg.bird_description}
                                wiggle = 'bounce'
                            />

                        </div>
                    )
                    :
                        <div>
                            <img className = 'bird-img' src = {habit.egg.start_img} data-toggle="modal" data-target={"#" + habit._id}/>
                            <p>???</p>
                            <Modal 
                                image = {habit.egg.start_img} 
                                bird_name = "???" 
                                habit_id = {habit._id}
                                habit_name = {habit.name}
                                habit_description = {habit.description}
                                wiggle = 'wiggle'
                            />
                            <ProgressBar 
                                percent = {(habit.count/habit.egg.hatching_number)*100}
                                color = '#36a499'
                            />
                        </div>
                    }
                    {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target={"#" + habit._id}>
                        Launch demo modal
                    </button> */}
                    
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