import React from 'react';
import { ImAirplane } from 'react-icons/im'
import { SiNamecheap } from 'react-icons/si'
import { IoMdPlanet } from 'react-icons/io'
import { AiFillSafetyCertificate } from 'react-icons/ai'

import './service.css'
 
function Service() {
  
    return ( 
        <div>
            <div id="services" className="services section-bg pt-5  pb-0 pb-sm-5  mt-5 mt-sm-0  ">
            <div className="container">

                <div className="section-title mt-0 mt-md-5" data-aos="fade-up">
                <h2 className='pt-2 pb-2' style={{fontWeight:'bold',marginBottom:'0'}}>Pourquoi la Cryptomonnaie ?</h2>
                <hr width="10%" className='ligne-c mb-2' />
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.</p>
                </div>

                <div className="row pb-5">
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up">
                    <div className="icon-box icon-box-pink">
                    <div className="icon"><i className=" ico1 bx bxl-dribbble"><ImAirplane/></i></div>
                    <h4 className="title mt-3">Rapide</h4>
                    <p style={{color:'#717171'}} >Les transactions sont presques instantanées ne prennt quelques minutes</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon-box icon-box-cyan">
                    <div className="icon"><i className="ico1 bx bx-file"><SiNamecheap /></i></div>
                    <h4 className="title mt-3">Pas Cher</h4>
                    <p style={{color:'#717171'}} >le prix de la transaction du Bitcoin est presque de zéro</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon-box icon-box-green">
                    <div className="icon"><i className="ico1 bx bx-tachometer"><IoMdPlanet /></i></div>
                    <h4 className="title mt-3">Global</h4>
                    <p style={{color:'#717171'}} >l'utilisation de la cryptomonnaie est limitée uniquement par la disponibilité d'internet</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon-box icon-box-blue">
                    <div className="icon"><i className="ico1 bx bx-world"><AiFillSafetyCertificate/></i></div>
                    <h4 className="title mt-3">Sûr</h4>
                    <p style={{color:'#717171'}} >aucune fraude de retro-facturation durant le processus de l'opération</p>
                    </div>
                </div>

                </div>

            </div>
            </div>
        </div>
    )
}

export default Service;
