import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = (props) =>{
    // let background = {
    //     background:'#2FA599'
    // }
    let whiteText = {
        color: 'white'
    }
    return(
        <nav className="navbar navbar-expand-sm navbar-light d-flex justify-content-between teal-background" >
            <Link className = "navbar-brand white-text" style ={whiteText} to = "/"><i class="fas fa-feather"></i> Habit Hatcher</Link>
            <div className="navbar-nav ml-auto">
                <Link className = "nav-link white-text" to ="/"><i className="nav-icon fas fa-home white-text fa-lg"></i></Link>
                <Link className="nav-link white-text" to="/add"><i className="nav-icon fas fa-plus white-text fa-lg"></i></Link>
                <Link className="nav-link white-text" to="/aviary"><i className="nav-icon fas fa-crow white-text fa-lg"></i></Link>
            </div>
        </nav>

    )
    
}

export default Navbar;