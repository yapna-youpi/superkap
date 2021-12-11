import React from 'react'

import './footer.css'

function Footer() {

    return (
        <div id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <h3 className='logo'>Superkap</h3>
                                <p>
                                    A108 Adam Street <br/>
                                    NY 535022, USA<br/><br/>
                                    <strong>Phone:</strong> +1 5589 55488 55<br/>
                                    <strong>Email:</strong> info@example.com<br/>
                                </p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
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
                            <p>Abonnez - vous à notre newsletter et recevez nos dernières actualités</p>
                            <form action="" method="post">
                                <input type="email" name="email"/><input type="submit" value="Subscribe" />
                            </form>

                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright21 <strong><span>superkap</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    {/* <!-- All the links in the footer should remain intact. -->
                    <!-- You can delete the links only if you purchased the pro version. -->
                    <!-- Licensing information: https://bootstrapmade.com/license/ -->
                    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/maxim-free-onepage-bootstrap-theme/ --> */}
                    Designed by <a href="#">BlackCoders</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
