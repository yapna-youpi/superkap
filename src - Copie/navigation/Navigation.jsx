import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import Header from '../components/header/Header.jsx'
import Home from '../components/home/Home.jsx'
import Crypto from '../components/crypto/Crypto.jsx'
// import Immo from '../components/immo/Immo.jsx'
import Business from '../components/business/view/Business'
import Academy from '../components/academy/Academy.jsx'
import Login from '../components/login/Login.jsx'
import Signup from '../components/signup/Signup.jsx'
import Help from '../components/help/Help.jsx'
import Buy from '../components/buy/Buy'
import Sell from '../components/sell/Sell'
import Footer from '../components/footer/Footer'
import Credit from '../components/credit/Credit'
import CreditCrypto from '../components/creditCrypto/CreditCrypto'
import Card from '../components/card/Card'
import ProduitDetail from '../components/immo/produitDetail/ProduitDetail.jsx'
import FormulaireC from '../components/formulaires/views/formulaireC/FormulaireC'
import Home2 from '../components/immo2/views/home/Home'
import Details from '../components/immo2/views/details/Details'
import BusinessDetail from '../components/business/components/businessDetail/BusinessDetail'

function Navigation() {
   
    return (
        <div>
            <Router>
                <Header />
                <Switch >
                    <Route exact path='/'  component={Home} />
                    <Route exact path='/Crypto'  component={Crypto} />
                    {/* <Route exact path='/Immo'  component={Immo} /> */}
                    <Route exact path='/Business'  component={Business} />
                    <Route exact path='/Academy'  component={Academy} />
                    <Route exact path='/Login'  component={Login} />
                    <Route exact path='/Signup'  component={Signup} />
                    <Route exact path='/Buy'  component={Buy} />
                    <Route exact path='/Sell'  component={Sell} />
                    <Route exact path='/Card'  component={Card} />
                    <Route exact path='/Credit'  component={Credit} />
                    <Route exact path='/CreditCrypto'  component={CreditCrypto} />
                    <Route exact path='/ProduitDetail'  component={ProduitDetail} />
                    <Route exact path='/Help'  component={Help} />
                    <Route exact path='/immo2'  component={Home2} />
                    <Route exact path='/immo2/details2'  component={Details} />
                    <Route exact path='/FormulaireC'  component={FormulaireC} />
                    <Route exact path='/BusinessDetail'  component={BusinessDetail} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default Navigation
