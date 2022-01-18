import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

import './home.css'
import Maison from './home-maison/Maison.jsx'
import Card from '../business/card/Card.jsx'
import Services from './services/Services.jsx'
import Formation from './formation/Formation'




function Home() {
    
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

                <Card />
                <Formation />
                
            
            </main>
        </div>
    )
}

export default Home
