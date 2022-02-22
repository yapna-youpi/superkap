import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import './carte.css'
import carte from './assets/banner.png'
import carteb from './assets/carte-bsic.png'
import cartec from './assets/carte-crypto.png'


function Credit({ User }) {
    const history =  useHistory();
    if(!User.nom) {
        history.push('/login')
    }

    return (
        <div className='sk-credit'>
            <div className="banner-credit">
            </div>
            <div className="command">
                <div className="command-option">
                <div className='command-head'>
                    <div className="container">
                        <div className="row d-flex flex-direction-column justify">
                            <div className="col command-head-left ">
                                <h6>Particuliers/entreprises/StartUp</h6>
                                <h1 className='title-n1'><span className='command-title'>VOS CARTES</span> BANCAIRES</h1>
                            </div>
                        <h4>Découvrez nos cartes VISA prépayées: </h4>
                        <div className="container">
                            <div className="row d-md-flex justify-content-around">
                                <div className="col col-md-6 ">
                                    <img onClick={()=> history.push("Credit")} style={{cursor:'pointer'}} src={carteb} alt='visa-bsic'/>
                                    <h5>La carte VISA BSIC</h5>
                                    <button onClick={()=> history.push("Credit")} className='btn btn-outline-info'>En savoir plus</button>
                                </div>
                                <div className="col col-md-6">
                                    <img onClick={()=> history.push("/CreditCrypto")} style={{borderRadius:"20px",cursor:'pointer'}} className='shadow mb-4' src={cartec} alt='vida-crypto' />
                                    <h5>La carte VISA CRYPTO</h5>
                                    <button onClick={()=> history.push("/CreditCrypto")} className='btn btn-outline-success mb-4'>En savoir plus</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="container command-body ">
                    <h1>Adopter le reflexe Carte Bancaire  </h1>
                    <p>La carte visa prépayée BSIC est disponible en 5 minutes dans nos locaux. Elle est pratique et vous pouvez l’avoir sans disposer d’un compte bancaire. Elle est idéale pour :</p>
                        <p>Les voyageurs partout dans le monde<br/>
                            Les personnes sans compte bancaire<br/>
                            Les nouveaux clients et clients de la BSIC bank</p>
                </div>
                <div className="container d-flex justify-content-between avantages py-5">
                    <div className="avantages-left">
                    <h3>Les principaux avantages</h3>
                    Avoir une carte sans disposer d’un compte bancaire<br/>
                    Pouvoir recharger la carte en fonction de ses besoins<br/>
                    Effectuer des achats en ligne<br/>
                    Effectuer des paiements sur TPE chez les commerçants<br/>
                    Voyager en toute quiétude et faire des retrais partout dans le monde<br/>
                    Financer les études de ses enfants à l’étranger<br/>
                    Faire recharger sa carte à distance via une agence BSIC<r/>
                    </div>
                    <div className="advantages-right">
                        <div className='d-flex justify-content-center align-items-center'><img className="credit-card" src={carte} alt='carte credit' /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

const mapStateToProps=state=>({User: state.User})

export default connect(mapStateToProps)(Credit)
