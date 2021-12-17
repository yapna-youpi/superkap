import React from 'react'

import './credit.css'
import carte from './assets/carte.png'

function Credit() {
    return (
        <div className='sk-credit'>
            <div className="banner-credit">
                <input type='submit' value="s'inscrire" />
            </div>
            <div className="command">
                <div className="command-option">
                <a href='https://www.gtpsecurecard.com/BSIC/'><div className="btn btn-lg teal command-solde">Consulter son Solde</div></a>
                    <div className="btn btn-lg second command-solde">Reconduire</div>
                    <div className="btn btn-lg bg-success command-solde">Recharger</div>
                </div>
                <div className='command-head'>
                    <div className="container d-flex justify">
                        <div className="command-head-left">
                            <h6>Particuliers/entreprises/StartUp</h6>
                            <h1 className='title-n1'><span className='command-title'>VOS CARTES</span> BANCAIRES</h1>
                        </div>
                        <div className="command-head-right">
                            <h1 className='btn btn-lg bg-info'>COMMANDER</h1>
                        </div>
                    </div>
                    
                </div>
                <div className="container command-body">
                    <h1>Adopter le reflexe Carte Bancaire  </h1>
                    <p>La carte visa prépayée BSIC est disponible en 5 minutes dans nos locaux. Elle est pratique et vous pouvez l’avoir sans disposer d’un compte bancaire. Elle est idéale pour :</p>
                        <p>Les voyageurs partout dans le monde<br/>
                            Les personnes sans compte bancaire<br/>
                            Les nouveaux clients et clients de la BSIC bank</p>
                </div>
                <div className="container d-flex justify-content-between">
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
                        <div className="credit-card"><img src={carte} alt='carte credit' /></div>
                    </div>
                </div>
                <div className="container d-flex justify-content-around mb-5 mt-5">
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
                <div className="container-fluid py-5 bg-warning mb-5 mt-5">
                    <h1 className='text-center'>VOTRE CARTE BSIC DISPONIBLE</h1>
                    <div className='text-center'><button className='btn btn-lg bg-info mx-auto'> Commander </button></div>
                </div>
            </div>
        </div>
    )
}

export default Credit