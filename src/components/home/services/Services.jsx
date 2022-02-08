import React from 'react'
import { useHistory } from 'react-router-dom'

import './services.css'
import { GiWorld } from 'react-icons/gi'
import imag1 from './images logo/logo superkapokvectmore.png'
import imag2 from './images logo/logo superkap immo.png'
import imag3 from './images logo/logo superkap academy.png'
import imag4 from './images logo/logo superkap business.png'

function Services() {

    let history = useHistory();
    return (
        <div>
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
        </div>
    )
}

export default Services
