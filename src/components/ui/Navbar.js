import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const { user: { name }, dispatch } = useContext( AuthContext );
    const history = useHistory();

    const handleLogout = () => {

        history.replace('/login');

        dispatch({
            type: types.logout
        });

    };

    return (
        <div className="fixed-top">
            <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
            <Link className="navbar-brand text-white" to="/">HeroesApp</Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink activeClassName="active" className="nav-item nav-link text-white" exact to="/marvel">Marvel</NavLink>
                    <NavLink activeClassName="active" className="nav-item nav-link text-white" exact to="/dc">DC</NavLink>
                    <NavLink activeClassName="active" className="nav-item nav-link text-white" exact to="/search">Search</NavLink>
                </div>
            </div>
            <div className="navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info"> { name }</span>
                    <button className="nav-item nav-link btn btn-info" onClick={ handleLogout }>Logout</button>
                </ul>
            </div>
            </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
    );

};