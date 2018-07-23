import React from 'react';
import './Instructions.css'
import { Link } from 'react-router-dom';

const Instructions = () => {
        return(
            <div className = "container text-center center-things">
                <h1><i class="fas fa-feather"></i> Welcome to Habit Hatcher!</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


</p>
                <Link className = 'btn btn-success instruction-btn' to='/add'>Add a Habit!</Link>
            </div>
        )
}

export default Instructions;