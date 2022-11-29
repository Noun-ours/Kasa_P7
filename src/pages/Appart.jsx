import React from 'react';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import Apparts from "../data/logements.json"
import Appartcomposant from '../composants/Appartcomposant';


const Appart = (appartement) => {
    return (
        // <Link to="/appart" className='fiche-appartement'>
        // </Link>
        <section className='fiche-resume'>
            <div className='fiche-appartement'>
                <h3>
                    Appartement
                    {appartement.pictures}
                </h3>
                <div className='interieur'>
                    {Apparts.map(appart => <Appartcomposant appartement={appart} />)}
                </div>
                <input type="checkbox" name="" id="" />
            </div>
        </section>
    );
};

export default Appart;


// 3. Objectifs 'SMART' fixés par l'étudiant et le mentor pour la prochaine session
// •	Compléter le style sur la page d'accueil.
// •	Mettre en place le composant "Accordion" pour l'utiliser sur la page de l'appartement et du "About".
// •	Mettre en place un lien dynamique et un route dynamique pour ouvrir la page appartement.
