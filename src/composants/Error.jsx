import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <div className='erreur'>
                <div className='h1-erreur'>
                    <h1>404</h1>

                </div>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/">Retounez sur la page d'acceuil</Link>
            </div>
        </>
    );
};

export default Error;