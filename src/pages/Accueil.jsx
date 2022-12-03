import Carte from '../composants/Carte'
import apparts from '../data/logements.json'
import banniere from "../images/IMG.png"
const Accueil = () => {
    //const apparts = [{ nom: "appart1", adresse: "adr1" }, { nom: "appart2", adresse: "adr2" }, { nom: "appart3", adresse: "adr3" }, { nom: "appart4", adresse: "adr4" }, { nom: "appart5", adresse: "adr5" }, { nom: "appart6", adresse: "adr6" },]
    return (
        <main className="liste-appartements">
            <div className="slogan">
                <h2>
                    Chez vous, partout,et ailleurs!
                    <img src={banniere} alt="" />
                </h2>
            </div>
            <div className="cartes-appartements">
                {apparts.map(appart => <Carte appartement={appart} />)}
            </div>
        </main>
    );
};

export default Accueil;