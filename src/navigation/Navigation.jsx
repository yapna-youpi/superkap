import React from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory, Redirect } from 'react-router-dom'

import Header from '../components/header/Header'
import Home from '../components/home/Home'
import Crypto from '../components/crypto/Crypto'
import Immo from '../components/immo/Immo.jsx'
import Business from '../components/business/Business'
import Academy from '../components/academy/Academy'
import Login from '../components/login/Login.jsx'
import Signup from '../components/signup/Signup'
import Help from '../components/help/Help'
import Footer from '../components/footer/Footer'

function Navigation() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/'  component={Home} />
                    <Route exact path='/Crypto'  component={Crypto} />
                    <Route exact path='/Immo'  component={Immo} />
                    <Route exact path='/Business'  component={Business} />
                    <Route exact path='/Academy'  component={Academy} />
                    <Route exact path='/Login'  component={Login} />
                    <Route exact path='/Signup'  component={Signup} />
                    <Route exact path='/Help'  component={Help} />
                    <Redirect path="/" />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default Navigation
