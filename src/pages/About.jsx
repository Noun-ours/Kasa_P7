import Accordeon from "../composants/Accordeon";
import banniere from "../images/gustavo-alves-YOXSC4zRcxw-unsplash 1.png"

const About = () => {
    return (
        <main>

            <div className="liste-appartements">

                <div className="slogan">
                    <img src={banniere} alt="" />

                </div>
            </div>
            <Accordeon etiquette={"Fiablilité"} contenu={"contenue teste"} />
            <Accordeon etiquette={"Respect"} contenu={"contenue teste"} />
            <Accordeon etiquette={"Service"} contenu={"contenue teste"} />
            <Accordeon etiquette={"Securité"} contenu={"contenue teste"} />



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