import React from 'react';
import './Instructions.css'
import { Link } from 'react-router-dom';

const Instructions = () => {
        return(
            <div className = "text-center center-things">
                <h1>Instructions</h1>
                <Link className = 'btn btn-success' to='/add'>Add a Habit</Link>
            </div>
        )
}

export default Instructions;