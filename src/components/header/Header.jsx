import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import './header.css'
import logo from './assets/logo-superkap.png'

function Header() {
    const [visible, setVisible] = useState(false);
    const myref = React.createRef();

    let History = useHistory();
    const navLink = (route) =>{
        
        myref.current.classList.remove('mobile-nav-visible');   
        History.push(route);
        setVisible( v => !v);
    }

    const handleNav = e =>{
        setVisible( v => !v);
            myref.current.classList.remove('mobile-nav-visible');
        if(!visible){
            myref.current.classList.add('mobile-nav-visible');
            
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
                            <li><Link className="nav-link scrollto "  to="/">Home</Link></li>
                            <li><Link className="nav-link scrollto" to="/Business">Business</Link></li>
                            <li><Link className="nav-link scrollto" to="/Crypto">Superkap Crypto</Link></li>
                            <li><Link className="nav-link scrollto " to="/Immo">Immobilier</Link></li>
                            <li><Link className="nav-link scrollto" to="/Academy">Academy</Link></li>
                            <li className="dropdown"><Link><span style={{textDecoration: 0}}>User</span> <i className="bi bi-chevron-down"></i></Link>
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
            { !visible?  (<i onClick={handleNav} className="bi bi-list mobile-nav-toggle"></i>)
                    :    (<i onClick={handleNav} class="bi bi-x mobile-nav-toggle"></i>)
            }
            
            <div id="nav-mobile" ref={myref} className="nav-mobile d-md-none d-block">
                    <div><div onClick={()=>navLink("/")}  className="col-12 lien">Acceuil</div></div>
                    <div><div onClick={()=>navLink("/Business")}  className="col-12 lien">Business</div></div>
                    <div><div onClick={()=>navLink("/Crypto")}  className="col-12 lien">Superkap crypto</div></div>
                    <div><div onClick={()=>navLink("/Immo")}  className="col-12 lien">Immobilier</div></div>
                    <div><div onClick={()=>navLink("/Academy")}  className="col-12 lien">Academie</div></div>
                    <div><div className="col-12 lien"><i class="bi bi-person-circle"></i> &nbsp; User</div></div>
                        <div><div onClick={()=>navLink("/Login")} className='liste'>Connexion</div></div>
                        <div><div onClick={()=>navLink("/SingUp")} className='liste'>S'inscrire</div></div>
                    <div><div onClick={()=>navLink("/Help")}  className="col-12 lien">Support</div></div>
                </div>
            {/* <!-- End Header --> */}
        </div>
    )
}

export default Header