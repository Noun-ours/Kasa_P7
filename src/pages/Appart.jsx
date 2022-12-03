import React from 'react';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import apparts from "../data/logements.json"
import { json, useParams } from 'react-router-dom';
import Carrousel from "../composants/Carrousel"

const Appart = () => {
    const { id } = useParams();
    const appt = apparts.find(appart => appart.id === id)
    return (
        // <Link to="/appart" className='fiche-appartement'>
        // </Link>
        <main className='fiche-resume'>
            <div className='fiche-appartement'>
                <img src={appt.cover} className="cover" alt="" />
                <Carrousel carousel={appt.pictures} />
            </div>
            <h3>

                {appt.title}

            </h3>
        </main>
    );
};

export default Appart;


// 3. Objectifs 'SMART' fixés par l'étudiant et le mentor pour la prochaine session
// •	Compléter le style sur la page d'accueil.
// •	Mettre en place le composant "Accordion" pour l'utiliser sur la page de l'appartement et du "About".
// •	Mettre en place un lien dynamique et un route dynamique pour ouvrir la page appartement.
