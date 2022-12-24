import React from "react";
import logoFooter from '../images/LOGO-Footer.jpg'


export default function Footer() {
    return (
        <footer>

            <div className="logo-footer">
                <img src={logoFooter} alt="logo de Kasa" />
            </div>
            <p>&#169; 2022 Kasa. All rights reserved</p>
            Copyleft2022
        </footer>
    )
}