import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const navbar = props => (
    
    <nav className = "navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link to="/" className="nav-link">Exercises</Link>
                </li>
            </ul>
        </div>
    </nav>

)

export default navbar;