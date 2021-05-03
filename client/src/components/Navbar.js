import React from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">To-Do App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" style={{display:"flex", justifyContent:"flex-end", paddingRight:"50px"}} id="navbarSupportedContent">
                    <ul className="navbar-nav float-right">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about_us">About Us</NavLink>
                        </li>
                        <li classNameName="nav-item">
                            <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                        </li>
                   
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar
