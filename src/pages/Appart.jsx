import React, { useState } from 'react';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import apparts from "../data/logements.json"
// import images from "../data/logements.json"
import { useParams } from 'react-router-dom';
import Carrousel from "../composants/Carrousel"
import Accordeon from "../composants/Accordeon"
// import Notation from '../composants/Notation';


const Appart = () => {
    const { id } = useParams();
    const appt = apparts.find(appart => appart.id === id)
    const notation = [1, 2, 3, 4, 5]
    return (

        <div className='page-appart'>
            <Carrousel images={appt.pictures} />

            <section className='info-appart'>
                <div className='description'>
                    <h3> {appt.title} </h3>
                    <h4>{appt.location} </h4>
                    <div>
                        {appt.tags.map(tag => <span>{tag} </span>)}
                    </div>
                </div>
                <div className='fototag' >
                    <div className='info-hote'>
                        {appt.host.name}
                        <img src={appt.host.picture} alt={appt.host.name} />
                    </div>
                    <div className='notation'>
                        &#9734;&#9734;&#9734;
                        {appt.rating}
                        <i className="fa-thin fa-star">&#9734;&#9734;</i>
                        {/* <Notation etoiles /> */}
                        <i className="fa-solid fa-star">&#10029;&#10029;</i>
                    </div>
                </div>
            </section >
            <div className='accordeon-appart'>
                <Accordeon className='accordeon-appart' etiquette={"description"} contenu={[appt.description]} />
                <Accordeon className='accordeon-appart' etiquette={"equipements"} contenu={[appt.equipments]} />
            </div>
        </div >
    );
};

export default Appart;


// 3. Objectifs 'SMART' fixés par l'étudiant et le mentor pour la prochaine session
// •	Compléter le style sur la page d'accueil.
// •	Mettre en place le composant "Accordion" pour l'utiliser sur la page de l'appartement et du "About".
// •	Mettre en place un lien dynamique et un route dynamique pour ouvrir la page appartement.
