import Accordeon from "../composants/Accordeon";
import banniere from "../images/gustavo-alves-YOXSC4zRcxw-unsplash 1.png"

const About = () => {
    return (
        <main>

            <div className="liste-appartements">

                <div className="slogan">
                    <h1>
                        <img src={banniere} alt="" />
                    </h1>
                </div>
            </div>
            <Accordeon etiquette={"Fiablilité"} contenu={"Les annonces postées sur Kasa garantissent une fiabilité totale.  Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."} />
            <Accordeon etiquette={"Respect"} contenu={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de note plateforme."} />
            <Accordeon etiquette={"Service"} contenu={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."} />
            <Accordeon etiquette={"Securité"} contenu={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."} />



        </main>
    );

};
// const accordeon = document.getElementsByClassName("zoneDeContenu");
// for (i = 0; i < accordeon.length; i++) {
//     accordeon[i].addEventListener("click", function () {
//         this.classList.toggle("active")
//     })
// }

export default About;