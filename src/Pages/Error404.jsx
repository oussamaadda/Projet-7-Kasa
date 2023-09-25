import React, {Fragment}from "react";
import { Link } from "react-router-dom";
import Shaping from "../Components/Shaping";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

import "../Styles/Error404.css"

function Error404(){
    return(
        <Fragment>
            <Shaping>
                <Navbar/>
                <div className="error error-commun">
                    <span>404</span>
                    <h4>Oups! La page que vous demandez n'existe pas.</h4>
                    <p><Link to="/">Retourner sur la page d'accueil</Link></p>
                </div>
            </Shaping>
            <Footer/>
        </Fragment>
    )
}

export default Error404;