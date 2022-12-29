
import { useState } from "react";


export default function Accordeon(props) {
    const [active, setActive] = useState(false)
    return (
        <div className="accordeon">
            <div className={active ? "zoneDeContenu active" : "zoneDeContenu"} onClick={() => { setActive(!active) }}>
                <div className="etiquette">{props.etiquette} <span>&#10095;</span> </div>
                <div className="contenu">
                    {
                        props.type === "liste" ?
                            <ul>
                                {props.contenu.map((equipement, index) => <li key={index}>{equipement}</li>)}
                            </ul> :
                            <p>{props.contenu}
                            </p>
                    }
                </div>
            </div>
        </div>
    );
};


// let i = 0
// const accordeon = document.getElementsByClassName("zoneDeContenu");
// for (i = 0; i < accordeon.length; i++) {
//     accordeon[i].addEventListener("click", function () {
//         this.classList.toggle("active")
//     })
// }












// import React from "react";


// const accordeonItemEntetes = document.querySelectorAll(".accordeon-item-entete");
// accordeonItemEntetes.forEach(accordeonItemEntete => {
//     accordeonItemEntete.addEventListener("click", event => {
//         accordeonItemEntete.classList.toggle("active");
//         const accordeonItemBody = accordeonItemEntete.nextElementSibling;
//         if (accordeonItemEntete.classList.contains("active")) {
//             accordeonItemBody.style.maxHeight = accordeonItemBody.scrollHeight + "px;"
//         }
//         else {
//             accordeonItemBody.style.maxHeight = 0;
//         }
//     });
// });