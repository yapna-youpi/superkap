import React from 'react'
import { RiFacebookFill,RiTwitterFill,RiWhatsappFill,RiInstagramFill,RiLinkedinFill } from 'react-icons/ri'

import './footer.css'
import logo from './assets/logo-superkap.png'

function Footer() {

    return (
        <div id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <h3 className='logo mx-auto mx-md-0'>
                                    <img className='logo' src={logo} alt="logo" />
                                </h3>
                                <p>
                                    polyclinic tsinga <br/>
                                    yaounde-II arr<br/><br/>
                                    <strong>Phone:</strong> +237 698215858<br/>
                                    <strong>Email:</strong> info@example.com<br/>
                                </p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i><RiTwitterFill /></i></a>
                                    <a href="https://www.facebook.com/Superkap-102254418642682" className="facebook">
                                        <i><RiFacebookFill/></i>
                                    </a>
                                    <a href="#" className="instagram"><i><RiInstagramFill /></i></a>
                                    <a href="https://api.whatsapp.com/send?phone=237698215858" className="whatsapp">
                                        <i><RiWhatsappFill /></i>
                                    </a>
                                    <a href="#" className="telegramm"><i><RiLinkedinFill /></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4 className='fot-link'>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Business</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Superkap Crypto</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Immobilier</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Academy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4 className='fot-link'>Our Services</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Trade cryptocurrency</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">shool formation</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">placement Immobile</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Business</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">exchange crypto</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4 className='fot-link'>Our Newsletter</h4>
                            <p className='lite'>Abonnez - vous à notre newsletter et recevez nos dernières actualités</p>
                            <form action="" method="post">
                                <input type="email" name="email"/><input type="submit" value="Subscribe" />
                            </form>

                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright21 <strong><span>Superkap</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="#">BlackCoders</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
