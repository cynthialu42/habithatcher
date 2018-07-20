import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = (props) =>{
    // let background = {
    //     background:'#2FA599'
    // }
    // let whiteText = {
    //     color: 'white'
    // }
    return(
        <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between teal-background" >
            <Link className = "navbar-brand white-text"  to = "/">Habit Hatcher</Link>
            <div className="navbar-nav ml-auto">
                <Link className="nav-link white-text" to="/add"><i class="fas fa-plus white-text"></i></Link>
                <Link className="nav-link white-text" to="/add"><i class="fas fa-feather white-text"></i></Link>
            </div>
        </nav>

    )
    
}

export default Navbar;