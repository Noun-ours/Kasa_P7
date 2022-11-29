import React from "react";
import { Link } from "react-router-dom";

export default function Appartcomposant({ appartement }) {
    return (
        <Link to="/appart" className="fiche-appartement">
            <h3>{appartement.description} </h3>
            <img src={appartement.pictures} alt={""} />
            <div className="accordeon">
                <div className="accordeon-item">
                    <div className="accordeon-item-entete">
                        description{appartement.description}
                    </div>
                    <div className="accordeon-item-body">
                        <div className="accordeon_item-body-content">

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
