import React from 'react'
import { Link, useHistory } from 'react-router-dom'


import './header.css'

function Header() {
    return (
        <div className="header">
            
             {/* <--======= Header ======= --*/}
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex justify-content-between">

                    <div className="logo">
                        <h1><a href="#">Superkap</a></h1>
                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                        <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
                        <li><Link className="nav-link scrollto" to="/Business">Business</Link></li>
                        <li><Link className="nav-link scrollto" to="/Crypto">Superkap Crypto</Link></li>
                        <li><Link className="nav-link scrollto " to="/Immo">Immobilier</Link></li>
                        <li><Link className="nav-link scrollto" to="/Academy">Academy</Link></li>
                        <li className="dropdown"><a href="#"><span style={{textDecoration: 0}}>User</span> <i className="bi bi-chevron-down"></i></a>
                            <ul className='text-center'>
                                <Link to="/Login"><li>Login Superkap</li></Link>
                                <Link to="/SignUp"><li><span>SingUp</span></li></Link>
                                <Link to="#"><li><span>SignOut</span></li></Link>
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