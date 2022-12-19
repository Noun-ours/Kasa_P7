import Carte from '../composants/Carte'
import apparts from '../data/logements.json'
import banniere from "../images/IMG.png"
const Accueil = () => {
    return (
        <>
            <main >
                <div className="liste-appartements">

                    <div className="slogan">
                        <h2>
                            <img src={banniere} alt="" className='image-banniere' />
                            Chez vous, partout,et ailleurs!
                        </h2>

                    </div>
                </div>
                <img src={banniere} alt="" className='image-banniere' />

                <div className="cartes-appartements">
                    {apparts.map(appart => <Carte key={appart.id} appartement={appart} />)}
                </div>
            </main>
        </>
    );
};

export default Accueil;