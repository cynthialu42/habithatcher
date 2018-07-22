import React from 'react';
import './habitmodal.css';
import moment from 'moment';

const HabitModal = props =>{
    return(
        <div class="modal modal-color fade" id={props.habit_id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{props.habit_name}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div className = 'text-left'>
                            <p className = 'text-muted text-right'><em>Created {moment(props.date).fromNow('dd')} ago</em></p>

                            <p>Notes: {props.habit_description}</p>
                            {props.iteration === 1 ? <p>Complete this task {props.iteration} time a day</p> : <p>Complete this task {props.iteration} times a day</p>}

                        </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-between">
                    <button type="button" class="btn btn-danger" data-dismiss="modal" onClick = {()=>props.handleDelete(props.habit_id)}>Delete Habit</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default HabitModal;