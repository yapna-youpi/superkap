import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { GiWorld } from 'react-icons/gi'
import { MdSchool } from 'react-icons/md'
import { IoBusiness } from 'react-icons/io5'

import './home.css'

function Home() {
    return (
        <div className='home'>
                {/* -- banner section-- */}
            <section className="hero d-flex flex-column justify-content-center align-items-center">
                <div className="container" data-aos="fade-in">
                <h1>Welcome to Superkap</h1>
                <h2>Buy, sell and trading your cryptocurrencies instantly and for less</h2>
                <div className="d-flex align-items-center">
                    <i className="bx bxs-right-arrow-alt get-started-icon"><HiArrowNarrowRight/></i>
                    <a href="#about" className="btn-get-started scrollto">Get Started</a>
                </div>
                </div>
            </section>

            <main id="main" >

                    {/* -- why buy crypto -- */}
                <section id="why-us" className="why-us">
                <div className="home-section1">

                    <div className="main1">
                        <div className="info1">
                            <div className="content">
                                <h3 style={{color:'#3D9828'}}>Why Choose SUPERKAP CRYPTO for yours Services</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                                </p>
                                <div className="text-center">
                                    <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="info2-content">
                            <div className="info2">
                                <span className="icon-info2">
                                    <i className="bx bxs-right-arrow-alt get-started-icon"><GiWorld/></i>
                                </span>
                                <div className="info2-right">
                                    <h5>SUPERKAP IMMO</h5>
                                    <p>facilite vos transactions immobilières avec la Crypto</p>
                                    <span>
                                        <i><HiArrowNarrowRight/></i>
                                    </span>
                                </div>
                            </div>
                            <div className="info2">
                                <span className="icon-info2">
                                    <i className="bx bxs-right-arrow-alt get-started-icon"><MdSchool/></i>
                                </span>
                                <div className="info2-right">
                                    <h5>SUPERKAP ACADEMY</h5>
                                    <p>forme et finance la formation des jeunes, puis les emploie dans les secteurs clé.</p>
                                    <span>
                                        <i ><HiArrowNarrowRight/></i>
                                    </span>
                                </div>
                            </div>
                            <div className="info2">
                                <span className="icon-info2">
                                    <i className="bx bxs-right-arrow-alt get-started-icon"><IoBusiness/></i>
                                </span>
                                <div className="info2-right">
                                    <h5>SUPERKAP Business</h5>
                                    <p>est une plateforme de e-commerce, de vente en ligne qui accepte les Crypto et le cash lors de la vente de différents articles.</p>
                                    <span>
                                        <i><HiArrowNarrowRight/></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>

                {/* <section className='services' id='services'>
                    <div className="section-heading">
                        <h2>Web Services</h2>
                        <p>Rapoo can be used to create anything from a small marketing page to a sophisticated website.</p>
                    </div> 

                    <div className="row1">
                        <div className="lig1">
                            <div className="web-service-block">
                                <i className="ti-light-bulb"></i>
                                <h3>Creative Design</h3>
                                <p>Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had .</p>
                            </div>
                        </div>
                        <div className="lig1">
                            <div className="web-service-block">
                                <i className="ti-desktop"></i>
                                <h3>Web Development</h3>
                                <p>Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had .</p>
                            </div>
                        </div>
                        <div className="lig1">
                            <div className="web-service-block">
                                <i className="ti-announcement"></i>
                                <h3>Digital Marketing</h3>
                                <p>Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had .</p>
                            </div>
                        </div>
                    </div>

                    <div className="row2">
                        <div className="lig1">
                            <div className="web-service-block">
                                <i className="ti-layers-alt"></i>
                                <h3>Graphic Design</h3>
                                <p>Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had .</p>
                            </div>
                        </div>
                        <div className="lig1">
                            <div className="web-service-block">
                                <i className="ti-mobile"></i>
                                <h3>App Development</h3>
                                <p>Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had .</p>
                            </div>
                        </div>
                        <div className="lig1">
                            <div className="web-service-block">
                                <i className="ti-settings"></i>
                                <h3>Wordpress Installation</h3>
                                <p>Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had .</p>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>
        </div>
    )
}

export default Home
