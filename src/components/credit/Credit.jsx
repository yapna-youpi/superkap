import React from 'react'

import './credit.css'
import carte from './assets/carte.png'
import vignette from './assets/vignette.jpg'
import banq1 from './assets/banq1.jpg'
import banq3 from './assets/banq3.jpg'
import visa from './assets/banner.png'


function Credit() {
    return (
        <div className='sk-credit'>
            <div className="banner-credit">
                {/* <div className="banner-content">
                    <h1 style={{color:'var(--sk-greenLight)'}}>BSIC</h1>
                    <input type='submit' value="s'inscrire" />
                </div> */}
            </div>
            <div className="command">
                <div className="command-option">
                <a href='https://www.gtpsecurecard.com/BSIC/'><h1 className="btn btn-lg teal command-solde">Consulter son Solde</h1></a>
                    <h1 className="btn btn-lg  second command-solde">Reconduire</h1>
                    <h1 className=" btn btn-lg bg-success command-solde">Recharger</h1>
                </div>
                <div className='command-head'>
                    <div className="container">
                        <div className="row d-flex flex-direction-column justify">
                            <div className="col command-head-left ">
                                <h6>Particuliers/entreprises/StartUp</h6>
                                <h1 className='title-n1'><span className='command-title'>VOS CARTES</span> BANCAIRES</h1>
                            </div>
                            <div className="col text-center command-head-right">
                                <h1 className='btn btn-lg bg-info'>COMMANDER</h1>
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
                <div className="container d-flex justify-content-between avantages">
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
                    <h3 className='mt-5 pt-5 px-3 text-center mb-3' style={{fontWeight:"bold"}}>C'est simple et pratique grace a votre banque BSIC </h3>
                <div className="container-fluid carti  d-flex justify-content-around mb-5 pb-5 ">
                    <div className="card mx-3 ">
                        <img className="card-img-top" src={banq1} alt="Card1"/>
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <p className="card-text">pour vos retraits et paiements mobile</p>
                            <a className="btn w-100 btn-light">See Profile</a>
                        </div>
                    </div>
                    <div className="card mx-3">
                        <img className="card-img-top" src={vignette} alt="Card2"/>
                        <div className="card-body">
                            <h4 className="card-title"></h4>
                            <p className="card-text">gagner en liberter ou que vous soyez</p>
                            <a className="btn btn-light w-100">See Profile</a>
                        </div>
                    </div>
                    <div className="card mx-3">
                        <img className="card-img-top" src={banq3} alt="Card3"/>
                        <div className="card-body">
                            <h4 className="card-title"></h4>
                            <p className="card-text">Some example text.</p>
                            <a className="btn btn-light w-100" >See Profile</a>
                        </div>
                    </div>
                </div>
                <div className="container d-flex tableau justify-content-around mb-5 mt-5">
                    <div className="tableau-n1">
                        <h3 className='tableau-title'>Frais de votre carte BSIC</h3>
                        <table className="table table-hover ">
                            <tbody>
                            <tr>
                                <td>Prix de carte </td>
                                <td> 20.000 XAF</td>
                            </tr>
                            <tr>
                                <td>Livraison rapide </td>
                                <td>24h</td>
                            </tr>
                            <tr>
                                <td>Livraison normale</td>
                                <td>72h</td>
                            </tr>
                            <tr>
                                <td>Frais pour services mensuels</td>
                                <td>750 XAF</td>
                            </tr>
                            <tr>
                                <td>Activation de la carte</td>
                                <td>Gratuit</td>
                            </tr>
                            <tr>
                                <td>Retrait auprès d'un ATM  int.</td>
                                <td>2% (min. = 1.500 XAF)</td>
                            </tr>
                            <tr>
                                <td>emande de solde auprès d'un ATM</td>
                                <td>200 XAF</td>
                            </tr>
                            <tr>
                                <td>Changement de PIN auprès d'un ATM</td>
                                <td>1.000 XAF</td>
                            </tr>
                            <tr>
                                <td>Refus de transaction d'un ATM</td>
                                <td>gratuit</td>
                            </tr>
                            <tr>
                                <td>Frais de Transfert de carte à carte</td>
                                <td> 1,5% (min. = 1.000 XAF)</td>
                            </tr>
                            <tr>
                                <td>Paiement International</td>
                                <td>2% (min. = 500 XAF)</td>
                            </tr>
                            <tr>
                                <td>Annulation de compte</td>
                                <td> Gratuit</td>
                            </tr>
                            </tbody>
                        </table>
                        
                    </div>
                    <div className="tableau-n2">
                        <h3 className='tableau-title'>Plafonds votre carte BSIC</h3>
                    <table className="table table-hover ">
                            <tbody >
                            <tr>
                                <td>Nombre de carte par personne</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Validité de la carte</td>
                                <td>3 ans</td>
                            </tr>
                            <tr>
                                <td>Solde de carte maximum</td>
                                <td> 5.000.000 XAF</td>
                            </tr>
                            <tr>
                                <td>Plafond Transactions</td>
                                <td>2.000.000 XAF</td>
                            </tr>
                            <tr>
                                <td>Retrait distributeur automatique </td>
                                <td>2.000.000 XAF / Jour</td>
                            </tr>
                            <tr>
                                <td>Montant de recharge minimum</td>
                                <td> 5.000  XAF</td>
                            </tr>
                            <tr>
                                <td>JPlafond de recharge</td>
                                <td>2.000.000 XAF / Jour</td>
                            </tr>
                            <tr>
                                <td>Fonds Insuffisants </td>
                                <td>200 XAF</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="container-fluid py-5 bg-warning  mt-5">
                    <h1 className='text-center'>VOTRE CARTE BSIC DISPONIBLE</h1>
                    <div className='text-center'><button className='btn btn-lg bg-info mx-auto'> Commander </button></div>
                </div>
                <div className="container-fluid pt-3 bg-P ">
                    <div className="row">
                        <div className="col d-none d-md-block .col-md-6 ">
                            <img src={visa} style={{height:'350px',width:'100%'}} alt="visa-crypto" />
                        </div>
                        <div className="col .col-md-6 fs-5">
                            <p className=''>
                                La livraison prendra 1-2 jours selon la ville. Le montant de recharge ne peut 
                                dépasser le solde maximum de la carte, qui est de 5.000.000 XOF. 
                                La carte prépayée est libellée en XOF. Vous pouvez recharger la carte avec 
                                les Fonds que vous recevez en échange de votre monnaie virtuelle.
                                Cette carte prépayée n'est pas une carte-cadeau, une carte de crédit ou 
                                une carte de paiement et ne fournit pas d'avances en espèces. 
                            </p>
                            <p>
                                L'utilisateur doit être vérifié par la procédure KYC. 
                                Pour pouvoir utiliser la carte, celle-ci doit être vérifiée et activée. 
                                Pour signaler une carte prépayée perdue ou volée, veuillez nous contacter à travers le Service client. 
                                Votre compte BSIC et votre carte prépayée sont émis par BSIC bank, Veuillez lire 
                                la Politique de confidentialité et les Termes et Conditions de la carte prépayée.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Credit
