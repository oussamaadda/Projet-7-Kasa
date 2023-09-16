import React from "react";
import { Link } from "react-router-dom"
import records from "../Datas/Logements.json"

import "../Styles/FicheLogement.css"

function Cards(){
    return(
        <div className="logements">
           {records.map((record) => {
                const { id, cover, title } = record;

                // affiche la fiche logement sur la page d'accueil
                return (
                    <div className="fiche-logement" key={id}>
                        <Link to={{ pathname: "/Logement", search: "?_id="+id }}>
                            <img src={cover} alt={title} />
                            <h3>{title}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards