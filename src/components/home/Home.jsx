import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useHistory } from 'react-router-dom'

import Maison from './home-maison/Maison.jsx'
import Card from '../business/components/card/Card'
import Services from './services/Services.jsx'
import Formation from './formation/Formation'

import './home.css'
import busi3 from '../business/assets/images/tof9.jpg'





function Home() {
    let history = useHistory();

    const Modalite3 = {
        titre: 'Chaine de venise',
        prix: '12000.00 XAF ou 50 Ussd',
        image: busi3
    }

    return (
        <div className='home' id='home'>
                {/* -- banner section-- */}
            <section className="hero d-flex flex-column justify-content-center align-items-center">
                <div className="container" data-aos="fade-in">
                <h1>Bienvenue Chez Superkap</h1>
                <h2>Achetez, vendez et échangez vos crypto-monnaies instantanément et à moindre coût</h2>
                <div className="d-flex align-items-center">
                    <i className="bx bxs-right-arrow-alt get-started-icon"><HiArrowNarrowRight/></i>
                    <a href="#firstDiv" className="btn-get-started scrollto">Get Started</a>
                </div>
                </div>
            </section>

            <main id="main" >

                {/*--ours services -- */}
               <Services />
               <Maison />
               <Card name={"Nouveaux produits"} Modalite={Modalite3} />
               <h6 onClick={()=>history.push('/Business')} className='btn btn-lg bg-info d-block mx-auto my-5 w-50'>Voir Plus de Produits</h6>
               <Formation />
                
            
            </main>
        </div>
    )
}

export default Home
