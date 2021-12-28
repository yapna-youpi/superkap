import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import './header.css'
import logo from './assets/logo-superkap.png'

function Header() {
    const [visible, setVisible] = useState(false);

    const handleNav = e =>{
        setVisible( v => !v);
            document.getElementById('nav-mobile').classList.remove('mobile-nav-visible');
        if(!visible){
            document.getElementById('nav-mobile').classList.add('mobile-nav-visible');
            
        }
    }


    return (
        <div className="header">
            
             {/* <--======= Header ======= --*/}
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex justify-content-between">

                    <div className="logo">
                        <h1><Link to='/'><img className='logo' src={logo}  alt="logo superkap"/></Link></h1>
                    </div>

                    <nav id="navbar" className="navbar ">
                        <ul>
                            <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
                            <li><Link className="nav-link scrollto" to="/Business">Business</Link></li>
                            <li><Link className="nav-link scrollto" to="/Crypto">Superkap Crypto</Link></li>
                            <li><Link className="nav-link scrollto " to="/Immo">Immobilier</Link></li>
                            <li><Link className="nav-link scrollto" to="/Academy">Academy</Link></li>
                            <li className="dropdown"><a href="#"><span style={{textDecoration: 0}}>User</span> <i className="bi bi-chevron-down"></i></a>
                                <ul className='text-center list-open'>
                                    <Link to="/Login" className='="list'><li>Login Superkap</li></Link>
                                    <Link to="/SignUp" className='="list'><li>Sign Up</li></Link>
                                </ul>
                            </li>
                            <li><a className="nav-link scrollto" href="#contact">Support</a></li>
                        </ul>
                    </nav>

                   
                        {/* !--End .navbar --> */}

                </div>
            </header>
            { visible?  (<i onClick={handleNav} class="bi bi-x mobile-nav-toggle"></i>)
                    :   (<i onClick={handleNav} className="bi bi-list mobile-nav-toggle"></i>) 
            }
            
            <div id="nav-mobile" className="nav-mobile d-md-none d-block">
                    <Link to="/"><div  className="col-12 lien">Acceuil</div></Link>
                    <Link to="/Business"><div  className="col-12 lien">Business</div></Link>
                    <Link to="/Crypto"><div  className="col-12 lien">Superkap crypto</div></Link>
                    <Link to="/Immo"><div  className="col-12 lien">Immobilier</div></Link>
                    <Link to="/Academy"><div  className="col-12 lien">Academie</div></Link>
                    <Link ><div  className="col-12 lien"><i class="bi bi-person-circle"></i> &nbsp; User</div></Link>
                        <Link to="/Login" ><div className='liste'>Connexion</div></Link>
                        <Link to="/SignUp" ><div className='liste'>S'inscrire</div></Link>
                    <Link to=""><div  className="col-12 lien">Support</div></Link>
                </div>
            {/* <!-- End Header --> */}
        </div>
    )
}

export default Header