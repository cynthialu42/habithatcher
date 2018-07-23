import React from 'react';
import './Instructions.css'
import { Link } from 'react-router-dom';

const Instructions = () => {
        return(
            <div className = "container text-center center-things">
                <div className = 'row d-flex justify-content-center'>
                    <div className = 'col-md-10'>
                    <h1 className = 'mb-5'><i className="fas fa-feather"></i> Welcome to Habit Hatcher!</h1>
                    <h5>Q. What do an egg and a habit have in common? </h5>
                     <h5 className = ''>A. It takes 21 days to hatch both!</h5>
                     <h3>◇ ◇ ◇</h3>
                     <h5>Turn your goals into habits while also collecting some feathered friends along the way! </h5>
                    <Link className = 'btn btn-success instruction-btn mt-3' to='/add'>Add a Habit!</Link>

                    </div>
                </div>
                
            </div>
        )
}

export default Instructions;