import React from 'react';
import './habitmodal.css';
import moment from 'moment';

const HabitModal = props =>{
    return(
        <div class="modal modal-color fade" id={props.habit_id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content box-styling">
                    <div class="modal-header">
                        <h3 class="modal-title" id="exampleModalLabel">{props.habit_name}</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>

                    </div>
                    <div class="modal-body">
                        <div className = 'text-left'>
                            <p className = 'text-muted'><em>Created {moment(props.date).fromNow('dd')} ago</em></p>


                            <h4>Notes:</h4>
                            <p>{props.habit_description}</p>
                            {/* {props.iteration === 1 ? <h6>Complete this task <strong>{props.iteration}</strong> time a day</h6> : <h6>Complete this task {props.iteration} times a day</h6>} */}

                        </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-between">
                    <button type="button" class="btn btn-danger modal-delete" data-dismiss="modal" onClick = {()=>props.handleDelete(props.habit_id)}>Delete Habit</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default HabitModal;