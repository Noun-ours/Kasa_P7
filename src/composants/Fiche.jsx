import React from 'react';
import apparts from '../data/logements.json'
import Fichette from './Fichette';
// const Fiche = () => {
//     return (
//         <div>
//             {apparts.map(appart => <Fiche appartement={appart} />)}
//         </div>
//     );
// };
function Fiche() {
    const idAppart = [
        {
            id: [0]
        }
    ]
    return (

        <div>
            {idAppart.map(appart => {
                <Fichette
                    key={apparts.id}
                    title={apparts.title0}
                />
            })}
        </div>
    )

}
export default Fiche;