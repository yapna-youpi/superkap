import React from 'react'

import './header.css'

function Header() {
    return (
        <div className="header">
            
             {/* <--======= Header ======= --*/}
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex justify-content-between">

                    <div className="logo">
                        <h1><a href="index.html">Superkap</a></h1>
                        {/*-- Uncomment below if you prefer to use an image logo --*/}
                        {/*-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}
                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about">Business</a></li>
                        <li><a className="nav-link scrollto" href="#services">Superkap Crypto</a></li>
                        <li><a className="nav-link scrollto " href="#portfolio">Immobilier</a></li>
                        <li><a className="nav-link scrollto" href="#team">Academy</a></li>
                        <li className="dropdown"><a href="#"><span>User</span> <i className="bi bi-chevron-down"></i></a>
                            <ul className='text-center'>
                                <a href="#"><li>Login Superkap</li></a>
                                <a href="#"><li><span>SingUp</span> <i className="bi bi-chevron-right"></i></li></a>
                                <a href="#"><li><span>SignOut</span><i class="bi bi-alarm-fill text-warning" style={{ fontSize: 50 }}></i></li></a>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="#contact">Support</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                        {/* !--End .navbar --> */}

                </div>
            </header>
            {/* <!-- End Header --> */}
        </div>
    )
}

export default Header