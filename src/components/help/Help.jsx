import React from 'react'

import './help.css'

function Help() {
    return (
        <div className='container help d-block d-md-flex mt-5 pt-5'>
            <div className="col-11 col-md-6 mx-auto help-left">
                <div className="container help-contact">
                    <div className='row'>
                        <div className="col col-md-4 d-flex">
                            <div className="col col-md-4">
                                <span className='help-ico'>io</span>
                            </div>
                            <div className="col col-md-8">
                                <h3>OUR Address</h3>
                                <p>polyclinic tsinga <br />yaounde-II arrondissement</p>
                            </div>
                        </div>
                        <div className="col col-md-4 d-flex">
                            <div className="col col-md-4">
                                <span className='help-ico'>io</span>
                            </div>
                            <div className="col col-md-8">
                                <h3>OUR Address</h3>
                                <p>polyclinic tsinga <br />yaounde-II arrondissement</p>
                            </div>
                        </div>
                        <div className="col col-md-4 d-flex">
                            <div className="col col-md-4">
                                <span className='help-ico'>io</span>
                            </div>
                            <div className="col col-md-8">
                                <h3>OUR Address</h3>
                                <p>polyclinic tsinga <br />yaounde-II arrondissement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            
            <div className="col-11 col-md-6 mx-auto help-right">
                <div className="map">
                    MAP...
                </div>
            </div>
            
        </div>
    )
}

export default Help
