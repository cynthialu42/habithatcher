import React from 'react';
import './modal.css';

const Modal = props =>{
    return(
        <div class="modal fade" id={props.habit_id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{props.habit_name}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body d-flex justify-content-around modal-body-css">
                        <div className = 'img-div'>
                            <img className = {`modal-img ${props.wiggle}`}  src = {props.image} />
                            <p>{props.bird_name}</p>
                        </div>
                        <div className = 'info-div align-items-center'>
                            <p>Goal: {props.habit_description}</p>
                            <hr/>
                            {props.bird_description ?
                                <p>{props.bird_name}: '{props.bird_description}'</p>
                                :
                                <p>Egg has not hatched yet!</p>
                            }
                            
                        </div>
                    </div>
                    {/* <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
    
}

export default Modal;