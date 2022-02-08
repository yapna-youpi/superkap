import React from 'react';
import { FiHeart } from 'react-icons/fi'
import { AiOutlineHome } from 'react-icons/ai'

import maison from './assets/fot1.jpg'
import maison1 from './assets/fot5.jpg'
import maison2 from './assets/fot3.jpg'
import maison3 from './assets/fot4.jpg'
import maison4 from './assets/fot2.jpg'
import './produitDetail.css'

function ProduitDetail() {
  return (
      <div className="produitDetail">
          <div className="container mt-5  pt-5 mb-4">
            <h2>{"Confortable appartement à Varenna"}</h2>
            <h6><FiHeart /> -  &nbsp; 241 -  <span style={{textDecoration:"underline",cursor:"not-allowed"}}>commentaires</span></h6>
            <div className="row">
                <div className="col col-md-6 p-fot1">
                  <img src={maison} alt="maison" className='imag' />
                </div>
                <div className="col col-md-6">
                  <div className="row">
                    <div className="col">
                      <div className="row ">
                          <div className="col .col-md-6 p-fot2"><img  src={maison1} alt="maison1" /></div>
                          <div className="col .col-md-6 p-fot3"><img className='p-tof2' src={maison2} alt="maison2" /></div>
                      </div>
                      <div className="row">
                          <div className="col .col-md-6 p-fot4"><img src={maison3} alt="maison3" /></div>
                          <div className="col .col-md-6 p-fot5"><img className='p-tof5' src={maison4} alt="maison4" /></div>
                      </div>
                    </div>
                  </div>  
                </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                  <h2><AiOutlineHome size={20} /> {"Logement entier : appartement · Hôte : Giorgia"}</h2>
                  <p>Ma maison est située en position stratégique. À deux pas de la gare (1 heure de train de Milan) et du port (ferry-boats et bateaux à destination de toutes les localités du lac)!</p>
                  <h6 style={{fontWeight:"bold"}}>Le logement :</h6>
                  <p>L’appartement se compose de pièces spacieuses et agréables avec deux chambres à coucher (dans celle avec un grand lit on peut en ajouter un troisième), une salle de séjour, une grande cuisine</p>
              </div>
            </div>
            <div className="row carros mt-3">
              <div className="col col-md-6">

              </div>
              <div className="col col-md-6 d-block d-sm-flex pt-3">
                  <div className="col d-none d-sm-block"></div>
                  <div className="col">
                    <p style={{fontSize:"12px"}}>Pour protéger votre paiement, ne transférez jamais d'argent et ne communiquez pas en dehors du site ou de l'application Airbnb.</p>
                    <button className='btn btn-outline-secondary'>contacter l'hôte</button>
                  </div>
              </div>
            </div>
          </div>
      </div>
  )
}

export default ProduitDetail