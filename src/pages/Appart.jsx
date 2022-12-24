import React from 'react';
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
    const notationColore = Array(5).fill(<i className="fa-solid fa-star"></i>)
    const notationClairs = Array(5).fill(<i className="fa-thin fa-star"></i>)
    // const notationCla = Array(5).fill(<i className="fa-thin fa-star"></i>);

    return (

        <div className='page-appart'>
            <Carrousel images={appt.pictures} />

            <section className='info-appart'>&#10029;&#9734;
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
                        <div className="etoile-star">
                            {appt.rating}



                            {notationColore.slice(5 - appt.rating).map(notationColor => {
                                return <span>{notationColor}</span>
                            }
                            )}
                            {notationClairs.slice(appt.rating).map(notationClair => {
                                return <span>{notationClair}</span>
                            }
                            )}




                        </div>
                    </div>
                </div>

                <div className="etoile-star">
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
