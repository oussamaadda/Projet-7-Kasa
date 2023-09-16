import React, { useState } from 'react'
import chevronGauche from "../assets/ChevronGauche.png"
import chevronDroit from "../assets/ChevronDroit.png"
import '../Styles/Carousel.css'

function Carousel({pictures}){
    const [index, setIndex]= useState(0)
    const totalPictures=pictures.length-1

    if(index<0) setIndex(totalPictures)
    if(index>totalPictures) setIndex(0)

    return(
        <div className='carousel'>

            {/* affiche la première image */}
            <div className='div-image'>  
                <img src={pictures[index]} className="image" key={"car-"+index} alt={"photo "+index} />
            </div>

            {/* si plus d'une image, alors ce code sera exécuté */}
            {totalPictures > 0 && ( 
                <div> {/* les boutons pour les chevrons droit et gauche, servent pour naviguer au sein du Carousel */}
                    <button onClick={() => setIndex(index - 1)}>{index}
                        <img src={chevronGauche} className='classChevronGauche' alt={'flèche gauche pour changer de photo '+index} />
                    </button>
                    <button onClick={() => setIndex(index + 1)}>{index}
                        <img src={chevronDroit} className='classChevronDroit' alt={'flèche droite pour changer de photo '+index} />
                    </button>
                </div>
            )}
            {totalPictures > 0 && (
                // compteur d'images qui ne s'affiche qu'en version Desktop et lorsqu'il y a plusieurs images
                <div className='div-compteur'> 
                    <p className='compteurImages'>
                        {index+1}/{totalPictures+1}
                    </p>
                </div>
            )}
        </div>
    )

}

export default Carousel