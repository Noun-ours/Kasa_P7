import React from "react";
import footerlogo from '../images/LOGOblanc.png'

export default function Footer() {
    return (
        <footer>

            <div className="logo-footer">
                <img src={footerlogo} alt="logo de Kasa" />
            </div>
            <p>&#169; 2022 Kasa. All rights reserved</p>
            Copyleft2022
        </footer>
    )
}