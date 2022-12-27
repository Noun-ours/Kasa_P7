import etoileBasse from "../images/etoileBasse.png"
import etoile from "../images/etoile.png"

const Notation = (props) => {
    const notationColore = Array(5).fill(<img src={etoile} />)
    const notationClairs = Array(5).fill(<img src={etoileBasse} />)
    return (
        <div className="etoile-star">
            {/* {appt.rating} */}
            {notationColore.slice(5 - props.note).map((notationColor, index) => {
                return <div key={index} className='note-a-etoile'>{notationColor}</div>
            }
            )}
            {notationClairs.slice(props.note).map((notationClair, index) => {
                return <div key={index} className='note-a-etoile etoiles-grise'>{notationClair}</div>
            }
            )}
        </div>
    );
};

// const nbrEtoiles = Array(5).fill(`&#10029;`);
//  const nbrEtoilesMoins = Array(5).fill()
export default Notation;