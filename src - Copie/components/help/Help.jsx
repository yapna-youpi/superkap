import React from 'react'
import { MdLocationPin } from 'react-icons/md' 
import { BsTelephoneFill } from 'react-icons/bs' 
import { HiMail } from 'react-icons/hi' 
// import Mape from './Map.jsx'


import './help.css'

function Help() {

    return (
        <div className="div help">

            <div class="section-title mt-5 pt-5 pb-0 w-75 mx-auto mb-md-3">
                <h2 data-aos="fade-up" style={{fontWeight:"bold"}}>Contact</h2>
                <p data-aos="fade-up">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className='container-fluid  d-block d-md-flex justify-content-between mt-4'>

                <div id="contact" class="contact col col-md-7">

                    <div class="container">
                        <div class="row">
                            <div class="col-11 col-sm-8 mt-5 mx-auto mt-sm-5" data-aos="fade-up">
                                <div class="info-box">
                                <i class="bx bx-map"><MdLocationPin /></i>
                                <h3>Our Address</h3>
                                <p>polyclinic tsinga, yaounde-2ème arrondissement</p>
                                </div>
                            </div>

                            <div class="col-11 col-sm-8 mt-5 mx-auto mt-sm-5" data-aos="fade-up" data-aos-delay="100">
                                <div class="info-box">
                                <i class="bx bx-envelope"><HiMail/></i>
                                <h3>Email Us</h3>
                                <p>info@example.com<br/>contact@example.com</p>
                                </div>
                            </div>
                            <div class="col-11 col-sm-8 mt-5 mx-auto mt-sm-5 mb-5" data-aos="fade-up" data-aos-delay="200">
                                <div class="info-box">
                                <i class="bx bx-phone-call"><BsTelephoneFill/></i>
                                <h3>Call Us</h3>
                                <p> +237 698215858<br/>+1 6678 254445 41</p>
                                </div>
                            </div>
                        </div>

                        <div class="row justify-content-center d-md-none" data-aos="fade-up" data-aos-delay="300">
                            <div class="col-xl-9 col-lg-12 mt-4">
                                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                                    </div>
                                    <div class="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                                    </div>
                                </div>
                                <div class="form-group mt-3">
                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
                                </div>
                                <div class="form-group mt-3">
                                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div class="my-3">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div class="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-11 col-md-5 mx-auto d-none d-md-block mt-sm-5 help-right">
                    <div className="map">
                        {/* <Mape /> */}
                    </div>
                </div>

            </div>    
        </div>
    )
}

export default Help
