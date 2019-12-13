import React from 'react'

import { Link } from 'react-router-dom';

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <div className="navbar-header">
            <Link to={'/todos'} className="navbar-brand">
                <i className="fa fa-calendar-check"/> Todo App
            </Link>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={'/todos'} className="nav-link"> Home </Link>
                </li>
                <li className="nav-item">
                    <Link to={'/about'} className="nav-link">Sobre</Link>
                </li>
            </ul>
        </div>
    </nav>
)