import React from "react";
import { Link } from "react-router-dom";

export default function Appartcomposant({ appartement }) {
    return (
        <Link to="/appart" className="fiche-appartement">
            {/* <h3>{appartement.description} </h3> */}
            <img src={appartement.pictures} alt={""} />


            <div className="accoordeon">
                <div className="accordeon-item">
                    <div className="accordeon-item-entete ">
                        description
                    </div>
                    <div className="accordeon-item-body">
                        <div className="accordeon_item-body-content">
                            {appartement.description}

                        </div>
                    </div>
                </div>
            </div>
            <div className="accoordeon">
                <div className="accordeon-item">
                    <div className="accordeon-item-entete">
                        equipements
                    </div>
                    <div className="accordeon-item-body">
                        <div className="accordeon_item-body-content">
                            {appartement.equipments}

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
