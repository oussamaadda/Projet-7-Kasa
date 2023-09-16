import React from "react";
import Shaping from "../Components//Shaping";
import Navbar from "../Layout/Navbar";
import Banner from '../Components/Banner'
import FicheLogement from '../Components/FicheLogement'
import Footer from '../Layout/Footer'

import '../Styles/Home.css'


function Home(){
  return (
    <div role="main">
      <Shaping>
        <Navbar/>
        <Banner>
          <div className="banner">
            <h1>Chez vous, partout et ailleurs</h1>
          </div>
        </Banner>
        <FicheLogement/>
        
      </Shaping>
      <Footer/>
    </div>
  )
}

export default Home