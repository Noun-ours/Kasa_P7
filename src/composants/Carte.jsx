import React from "react";
import { Link } from 'react-router-dom';
export default function Carte({ appartement }) {
    return (
        <Link to={`/appart/${appartement.id}`} className="carte-appartement" >
            <h3>{appartement.title} </h3>
            <img src={appartement.cover} alt={appartement.title} />
        </Link >
    )
}