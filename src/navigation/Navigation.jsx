import React from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory, Redirect } from 'react-router-dom'

import Header from '../components/header/Header.jsx'
import Home from '../components/home/Home.jsx'
import Crypto from '../components/crypto/Crypto.jsx'
import Immo from '../components/immo/Immo.jsx'
import Business from '../components/business/Business.jsx'
import Academy from '../components/academy/Academy.jsx'
import Login from '../components/login/Login.jsx'
import Signup from '../components/signup/Signup.jsx'
import Help from '../components/help/Help.jsx'
import Buy from '../components/buy/Buy'
import Sell from '../components/sell/Sell'
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
                    <Route exact path='/Buy'  component={Buy} />
                    <Route exact path='/Sell'  component={Sell} />
                    <Route exact path='/Help'  component={Help} />
                    <Redirect path="/" />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default Navigation
