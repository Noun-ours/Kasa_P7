import etoileBasse from "../images/etoileBasse.png"
import etoile from "../images/etoile.png"

const Notation = (props) => {
    const notationColore = Array(5).fill(<img src={etoile} />)
    const notationClairs = Array(5).fill(<img src={etoileBasse} />)
    return (
        <div className="etoile-star">
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


export default Notation;