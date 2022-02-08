import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useHistory } from 'react-router-dom'

import './home.css'
import Maison from './home-maison/Maison.jsx'
import Card from '../business/card/Card.jsx'
import Services from './services/Services.jsx'
import Formation from './formation/Formation'




function Home() {
    let history = useHistory();

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
               <Card name={"Nouveaux produits"}/>
               <h6 onClick={()=>history.push('/BusinessDetail')} className='btn btn-lg bg-info d-block mx-auto my-3 w-50'>Voir Plus de Produits</h6>
               <Formation />
                
            
            </main>
        </div>
    )
}

export default Home
