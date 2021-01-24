import React, { useContext } from 'react';
import { types } from '../../types/types';
import { AuthContext } from '../../auth/AuthContext';

export const LoginScreen = ( { history } ) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'Juan Villa'
            }
        });

        history.replace( lastPath );
        
    };

    return (
        <div className="container mt-5 animate__animated animate__fadeIn">
            <h1>Login, Welcome to the HeroesApp</h1>
            <hr />

            <button
                className="btn btn-info"
                onClick={ handleLogin }
            >
                Login
            </button>

        </div>
    );

};
