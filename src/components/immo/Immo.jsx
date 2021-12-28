import React from 'react'

import img1 from './assets/fot1.jpg'
import img2 from './assets/fot2.jpg'
import img3 from './assets/fot3.jpg'
import img4 from './assets/fot4.jpg'
import './immo.css'

function Immo() {
    return (
        <div id="immo" className='immo'>
                <div className="immo-content p-5 m-5">
                    <h2 className='immo-title text-center'>Où rêvez-vous de vivre?</h2>
                    <div className="immo-search d-flex justify-content-center">
                        <form className="d-flex justify-content-center" >
                            <div className="input-group mb-3 input-group-lg w-75 mb-2">
                                <input type="text" className="form-control " placeholder='Maison Appartement ...'/>
                                <span className="input-group-text btn">Rechercher</span>
                                <h6 className='mt-3'>1,525,363 annonces immobilières au Cameroun sur le grand site Superkap ! </h6>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container immo-head py-5 mt-5 ">
                    <h2 className='text-center'>Qu'est-ce que vous cherchez?</h2>
                    <div className="row immo-section2 ">
                        <div className="col-11 py-5 mt-5 bg-primary immo-couvre1 d-flex align-items-end">
                            <h4>Une maison</h4>
                        </div>
                        <div className="col-11 py-5 mt-5 bg-info immo-couvre2 d-flex align-items-end">
                            <h4>Un appartement</h4>
                        </div>
                        <div className="col-11 py-5 mt-5 bg-success immo-couvre3 d-flex align-items-end">
                            <h4>Un terrain</h4>
                        </div>
                        <div className="col-11 py-5 mt-5 bg-danger immo-couvre4 d-flex align-items-end">
                            <h4>Un logement etudiant</h4>
                        </div>
                    </div>    
                </div>
                <div className="container">
                      {/* styling portfolio */}
                    <section className="content-section" id="portfolio">
                        <div className={`container px-4 px-lg-5`}>
                            <div className={`content-section-heading text-center`}>
                                <h2 className="mb-5 til">Recement publier dans  les annonces</h2>
                            </div>
                            <div className={`row gx-0`}>
                                <div className="col-lg-6">
                                    <span className="portfolio-item" href="#!">
                                        <div className="caption">
                                            <div className="caption-content">
                                                <div className="h2">Calendar</div>
                                                <p className="mb-0">A dark blue background with a very best style !</p>
                                            </div>
                                        </div>
                                        <img className="img-fluid" src={img1} alt="..." />
                                    </span>
                                </div>
                                <div className="col-lg-6">
                                    <span className="portfolio-item" href="#!">
                                        <div className="caption">
                                            <div className="caption-content">
                                                <div className="h2">Ice Cream</div>
                                                <p className="mb-0">A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
                                            </div>
                                        </div>
                                        <img className="img-fluid" src={img2} alt="..." />
                                    </span>
                                </div>
                                <div className="col-lg-6">
                                    <span className="portfolio-item" href="#!">
                                        <div className="caption">
                                            <div className="caption-content">
                                                <div className="h2">Strawberries</div>
                                                <p className="mb-0">Strawberries are such a tasty snack, especially with a little sugar on top!</p>
                                            </div>
                                        </div>
                                        <img className="img-fluid" src={img3} alt="..." />
                                    </span>
                                </div>
                                <div className="col-lg-6">
                                    <span className="portfolio-item" href="#!">
                                        <div className="caption">
                                            <div className="caption-content">
                                                <div className="h2">Workspace</div>
                                                <p className="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
                                            </div>
                                        </div>
                                        <img className="img-fluid" src={img4} alt="..." />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>

        </div>
    )
}

export default Immo

