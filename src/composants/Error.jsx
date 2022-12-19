import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <div className="logo-nav">

            </div>
            <div className='erreur'>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/">Retounez sur la page d'acceuil</Link>
            </div>
        </>
    );
};

export default Error;