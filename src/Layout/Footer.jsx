import React from "react";
import logo from '../assets/LogoNoir.webp'

import '../Styles/Footer.css'

function Footer(){
    return(
        <div className="footer">
            <div className="img-footer">
                <img src={logo} alt = "logo"/>
            </div>
            <div className="text"><p>© 2020 Kasa, All rights reserved</p></div>
        </div>
    )
}

export default Footer;