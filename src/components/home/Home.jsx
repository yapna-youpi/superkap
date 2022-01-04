import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useHistory } from 'react-router-dom'

import { GiWorld } from 'react-icons/gi'
// import { MdSchool } from 'react-icons/md'
// import { IoBusiness } from 'react-icons/io5'
import imag1 from './assets/images logo/logo superkapokvectmore.png'
import imag2 from './assets/images logo/logo superkap immo.png'
import imag3 from './assets/images logo/logo superkap academy.png'
import imag4 from './assets/images logo/logo superkap business.png'
// import imo1 from './assets/images immo/imo1.jpg'
// import imo2 from './assets/images immo/imo2.jpg'
// import imo3 from './assets/images immo/imo3.jpg'
// import imo4 from './assets/images immo/imo4.jpg'
// import imo5 from './assets/images immo/imo5.jpg'


import './home.css'

function Home() {

    const history = useHistory();
    
    return (
        <div className='home' id='home'>
                {/* -- banner section-- */}
            <section className="hero d-flex flex-column justify-content-center align-items-center">
                <div className="container" data-aos="fade-in">
                <h1>Bienvenue Chez Superkap</h1>
                <h2>Buy, sell and trading your cryptocurrencies instantly and for less</h2>
                <div className="d-flex align-items-center">
                    <i className="bx bxs-right-arrow-alt get-started-icon"><HiArrowNarrowRight/></i>
                    <a href="#firstDiv" className="btn-get-started scrollto">Get Started</a>
                </div>
                </div>
            </section>

            <main id="main" >

                {/*--ours services -- */}
                <div className="container-fluid uniform py-5">
                    <div id="firstDiv"  className="row d-flex justify-content-around  py-5 flex-column flex-md-row">
                        <div onClick={()=>history.push('/Crypto')} div className="uniform-col shadow col-10 col-md-2 m-5 mx-sm-3  p-5 p-md-3">
                            <p className='text-center'><img className='uniform-img' src={imag1} alt="logo1" /></p>
                            <h5 className='text-center'>Superkap Crypto</h5>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className='text-center'>
                                    <i className="bx bxs-right-arrow-alt get-started-icon"><GiWorld/></i>
                            </p>
                        </div>
                        <div onClick={()=>history.push('/Immo')} className="uniform-col shadow col-10 col-md-2 m-5 mx-sm-3  p-5 p-md-3">
                            <p className='text-center'><img className='uniform-img' src={imag2} alt="logo1" /></p>
                            <h5 className='text-center'>Superkap Immobilier</h5>
                            <p className='text-center'>facilite vos transactions immobilières avec la Crypto.</p>
                            <p className='text-center'>
                                    <i className="bx bxs-right-arrow-alt get-started-icon"><GiWorld/></i>
                            </p>
                        </div>
                        <div onClick={()=>history.push('/Academy')} className="uniform-col shadow col-10 col-md-2 m-5 mx-sm-3  p-5 p-md-3" >
                            <p className='text-center'><img className='uniform-img' src={imag3} alt="logo1" /></p>
                            <h5 className='text-center'>Superkap Academy</h5>
                            <p className='text-center'>forme et finance la formation des jeunes, puis les emploie dans les secteurs clé.</p>
                            <p className='text-center'>
                                    <i className="bx bxs-right-arrow-alt get-started-icon"><GiWorld/></i>
                            </p>
                        </div>
                        <div onClick={()=>history.push('/Business')} className="uniform-col shadow col-10 col-md-2 m-5 mx-sm-3  p-5 p-md-3">
                            <p className='text-center'><img className='uniform-img' src={imag4} alt="logo1" /></p>
                            <h5 className='text-center'>Superkap Business</h5>
                            <p className='text-center'>est une plateforme de e-commerce, de vente en ligne qui accepte les Crypto et le cash lors de la vente de différents articles.</p>
                            <p className='text-center'>
                                    <i className="bx bxs-right-arrow-alt get-started-icon"><GiWorld/></i>
                            </p>
                        </div>
                    </div>
                </div>

                    {/* -- why buy crypto -- */}
                {/* <section id="why-us" className="why-us">
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
                </section> */}

                <div className="home-immo shadow container my-5 pb-3">
                    <h2 className='text-left py-3 mt-4' style={{paddingLeft:'3%',fontWeight:'bold'}}>Maisons et Appartements Disponibles</h2>
                   {/*} <div className="row d-flex flex-sm-column flex-md-row justify-content-around">
                         <div className="col-11 h-immo-card  col-md-4  mt-5">
                            <div className="h-immo-content">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus officiis quisquam delectus.</p>
                            </div>
                        </div>
                        <div className="col-11 h-immo-card  col-md-4  mt-5">
                            <div className="h-immo-content">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus officiis quisquam delectus.</p>
                            </div>
                        </div>
                        <div className="col-11 h-immo-card  col-md-4  mt-5">
                            <div className="h-immo-content">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus officiis quisquam delectus.</p>
                            </div>
                        </div> 
                    </div>*/}
                    <div className="row d-flex justify-content-around">
                        <div className="col-11  immo-card2 col-md-5 p-5">
                            <h4 className='.h-immo-content'>profiter au maximum de ces lieux empreints de sérénité</h4>
                        </div>
                        <div className="col-11 mt-5  mt-md-0 immo-card1 col-md-5 p-5">
                            <h4 className='.h-immo-content'>un appartement,une destination ideale pour votre prochain séjour</h4>
                        </div>
                    </div>
                </div>

                <section className='services' id='services'>
                    <div className="section-heading">
                        <h2>Nos Offres de formations</h2>
                        <p>retrouver toutes vos formations dans notre centre multifonctionnel</p>
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
                </section>
            </main>
        </div>
    )
}

export default Home
