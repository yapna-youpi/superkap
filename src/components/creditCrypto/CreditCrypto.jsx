import React from 'react'

import './credit.css'
import carte from './assets/carte.png'
import vignette from './assets/vignette.jpg'
import banq1 from './assets/banq1.jpg'
import banq3 from './assets/banq3.jpg'
import visa from './assets/banq1.jpg'


function Credit() {
    return (
        <div className='sk-credit1'>
            <div className="banner-credit">
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
                    <h1>Notre carte VISA CRYPTO</h1>
                    <p>La carte visa prépayée rechargeable CRYPTO est un support qui permet de retirer, payer sur internet et TPE des achats pour un montant défini à l'avance. </p>
                    <p>Elle est aussi utilisée pour les transferts d'argent de carte à carte.<br/>
                        Pas besoin de compte bancaire pour souscrire.<br/>
                        Vous pouvez l'obtenir en passant une commande sur ce site.</p>
                </div>
                <div className="container d-flex justify-content-between avantages px-5">
                    <div className="avantages-left">
                        <h3>Les principaux avantages</h3>
                        <ol>
                            <li>La carte Visa prépayée CRYPTO n’exige aucune vérification de solvabilité.</li>
                            <li>La carte Visa prépayée CRYPTO offre plusieurs options de recharge faciles et rapides en étant un outil efficace pour mieux gérer vos achats.</li>
                            <li>La carte Visa prépayée CRYPTO offre une grande flexibilité d’utilisation et plus d'autonomie dans vos dépenses.</li>
                        </ol>
                        <br/>
                        <p>Vous pouvez aussi l'utiliser pour:</p>
                        <ul>
                            <li>Pour éffectuer vos réservations de voyage en ligne.</li>
                            <li>Pour vos achats en ligne (Facebook, Abonnement, Compte Iphone, Les paris sportifs et jeux, Casino, Etc.).</li>
                            <li>Pour les retraits d'argent dans plus de 1,7 million de guichets automatiques VISA dans le monde.</li>
                        </ul>
                    </div>
                    <div className="advantages-right">
                        <div className='d-flex justify-content-center align-items-center'><img className="credit-card" src={carte} alt='carte credit' /></div>
                    </div>
                </div>

                <section id="blog" className="padd-sectio">
                <div className="container" data-aos="fade-up">
                <div className="section-title text-center">

                    <h2>C'est simple et pratique grace a votre banque BSIC</h2>
                    <p className="separator">Integer cursus bibendum augue ac cursus .</p>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">

                    <div className="col-md-6 col-lg-4">
                    <div className="block-blog text-left">
                        <a href="#"><img src={banq1} alt="img-3"/></a>
                        <div className="content-blog">
                        <h4><a href="#">whats isthe difference between good and bat typography</a></h4>
                        <span>05, juin 2017</span>
                        <a className="float-end readmore" href="#">read more</a>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                    <div className="block-blog text-left">
                        <a href="#"><img src={vignette} className="img-responsive" alt="img-1"/></a>
                        <div className="content-blog">
                        <h4><a href="#">whats isthe difference between good and bat typography</a></h4>
                        <span>05, juin 2017</span>
                        <a className="float-end readmore" href="#">read more</a>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                    <div className="block-blog text-left">
                        <a href="#"><img src={banq3} className="img-responsive" alt="img-2"/></a>
                        <div className="content-blog">
                        <h4><a href="#">whats isthe difference between good and bat typography</a></h4>
                        <span>05, juin 2017</span>
                        <a className="float-end readmore" href="#">read more</a>
                        </div>
                    </div>
                    </div>

                </div>
                </div>
                </section>


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
                    <h1 className='text-center'>VOTRE CARTE CRYPTO DISPONIBLE</h1>
                    <div className='text-center'><button className='btn btn-lg bg-info mx-auto'> Commander </button></div>
                </div>
                <div className="container-fluid pt-3 bg-P ">
                    <div className="row">
                        <div className="col .col-md-6 fs-5">
                            <p className=''>
                                <h5 className='text-center fw-bolder'>Sécurité et prévention de la fraude</h5>
                                La carte Visa prépayée Crypto favorise la tranquillité d’esprit en 
                                limitant votre exposition aux fraudes bancaires.
                            </p>
                            <p>
                            Cette carte internationale VISA Crypto est en formule PRÉPAYÉE et est 
                            disponible pour une cible clientèle et non clientèle. Elle est rechargeable à souhait 
                            et permet le transfert de carte à carte. Elle permet les retraits sur tous les GABS GIM et VISA 
                            et les paiements sur tous les TPE VISA en plus des sites marchands.
                            </p>
                        </div>
                            <div className="col d-none d-md-block .col-md-6 ">
                                <img src={visa} style={{height:'350px',width:'100%'}} alt="visa-crypto" />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Credit
