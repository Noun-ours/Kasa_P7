import React from 'react';

const Notation = ({ etoiles }) => {

    const notationEtoile = Array.from({ length: 5 }, (index) => {
        let rang = index + 1;
        return

        <span key={index}>

            {etoiles > index + 1 ? (
                < Fasolid className="etoile" />
            ) : etoiles > rang ? (
                <FapasSolid className="etoile" />
            )
    }
        </span>

    } ;
    return
    <div>
        Notation
    </div>

};

export default Notation;