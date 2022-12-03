import { useParams } from "react-router-dom"
import Appart from "../pages/Appart"
import apparts from '../data/logements.json'


export default function Carrousel() {
    const affichePict = apparts.map([])
    return (

        <div className="carouselConteuneur">
            <div className="slider">
                {/* <img src={appt.picture} className="active" /> */}
            </div>
            <div className="boiteABouton">
                <div className="btnNav droite">"\"</div>
                <div className="btnNav Gauche">\276F</div>

            </div>
        </div>
    )
};
