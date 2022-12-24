import React from 'react';
import apparts from "../data/logements.json"
import rating from "../data/logements.json"

const Notation = () => {
    const { id } = useParams();
    const appt = apparts.find(appart => appart.id === id)
    const laNote = rating.find(rate => rate.id === id)
    const notation = [1, 2, 3, 4, 5];
    const totalEtoiles = 5
    function trouveLaNote() {
        for (let note in notation) {
            const nombreEtoiles = (notation[note] + totalEtoiles)
        }
        console.log(notation);
    }
    return (
        <div>
            {appt.rating}
            {laNote.rating}
        </div>
    );
};

// const nbrEtoiles = Array(5).fill(`&#10029;`);
//  const nbrEtoilesMoins = Array(5).fill()
// export default Notation;