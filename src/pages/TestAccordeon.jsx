import Accordeon from "../composants/Accordeon";
import Carrousel from "../composants/Carrousel";
import apparts from "../data/logements.json"
// import { useParams } from "react-router-dom"

const TestAccordeon = () => {
    return (
        <section>
            <Accordeon />
            <Accordeon />
            <Accordeon />
            <Accordeon />
            <Accordeon />
        </section>
    );
};
// let i = 0
// const accordeon = document.getElementsByClassName("zoneDeContenu");
// for (i = 0; i < accordeon.length; i++) {
//     accordeon[i].addEventListener("click", function () {
//         this.classList.toggle("active")
//     })
// }


export default TestAccordeon;