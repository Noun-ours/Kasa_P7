import { useState } from "react"

export default function Carrousel({ images }) {
    const [i, setI] = useState(0)

    const imgPrecedente = () => {
        let indexPrecedent = i - 1;
        if (indexPrecedent < 0) {
            indexPrecedent = images.length - 1
        }
        setI(indexPrecedent)
    }
    const imgSuivante = () => {
        let indexSuivant = i + 1;
        if (indexSuivant > (images.length - 1)) {
            indexSuivant = 0
        }
        setI(indexSuivant)
    }
    return (


        <div className="carouselConteuneur">
            <img src={images[i]} className="activefoto" />
            <button className="btnNav gauche" onClick={imgPrecedente}>&#10094;
            </button>
            <button className="btnNav droite" onClick={imgSuivante}>&#10095;
            </button>
            <div className="index-slide" >{i + 1}/{images.length} </div>
        </div>
    )
};
