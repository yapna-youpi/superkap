import React from 'react'
import { useHistory } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

import './crypto.css'
import Caroussel from './carrousssel/Caroussel'
import img1 from './assets/crypt5.jpg'
import img2 from './assets/crypt2.jpg'
import img3 from './assets/crypt3.jpg'
import tof3 from './assets/tof3.jpg'
import tof from './assets/crypt4.jpg'
import carte from './assets/carte.png'
import crp1 from './assets/images crypto/dogde.jpeg'
import crp2 from './assets/images crypto/tether.jpg'
import crp3 from './assets/images crypto/solana.jpg'
import crp4 from './assets/images crypto/bitcoin.jpg'
import crp5 from './assets/images crypto/usd.jpg'
import crp6 from './assets/images crypto/terra.jpg'
import crp7 from './assets/images crypto/nft.jpg'
import crp8 from './assets/images crypto/usdc-logo.jpg'


function Crypto() {
    const history = useHistory();
    return (
        <div className="crypto">
            <div className="banner-content">
                <div className="banner">

                    <Caroussel />


                    {/* <Carousel fade>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>disponible sans aucun delai de paiement</h3>
                            <p>votre partenaire ideale.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel> */}
                </div>
            </div>
            <div className="partners">
                <div className='partner-container'>
                    <img className='partner1' src={crp8} alt='crypto' />
                    <img className='partner1' src={crp7} alt='crypto' />
                    <img className='partner1' src={crp6} alt='crypto' />
                    <img className='partner1' src={crp5} alt='crypto' />
                    <img className='partner1' src={crp4} alt='crypto' />
                    <img className='partner1' src={crp3} alt='crypto' />
                    <img className='partner1' src={crp2} alt='crypto' />
                    <img className='partner1' src={crp1} alt='crypto' />
                    <img className='partner1' src={crp7} alt='crypto' />
                    <img className='partner1' src={crp6} alt='crypto' />
                    <img className='partner1' src={crp5} alt='crypto' />
                    <img className='partner1' src={crp4} alt='crypto' />
                    <img className='partner1' src={crp3} alt='crypto' />
                    <img className='partner1' src={crp2} alt='crypto' />
                    <img className='partner1' src={crp1} alt='crypto' />
                </div>
            </div>
            <div className="trade py-4 ">
                <div className="trade-left pt-3 p-4 p-md-0">
                    <h1>Nos services sur Blockchain</h1>
                    <p>Avec notre nouveau programme d'affiliation, vous aurez<br/> les outils les plus avancés du marché qui<br/>vous permettra de promouvoir Pursa et de générer des commissions avec nous !</p>
                    <dl>
                        <dt>INFOS CRYPTO</dt>
                        <dd>Initiation, perfectionnement et mise à jour des connaissances sur les plates-formes Crypto.</dd>

                        <dt>HOLDING.</dt>
                        <dd>N’achetez pas aveuglement toute crypto, faites confiance aux professionnels pour<br/>
                             vous aider à investir sur les projets les plus rentables. Il est exclusivement réservé aux abonnés actifs.<br/>
                            <button onClick={()=>history.push('/Help')} className="btn-crypto py-2 my-2">En savoir plus</button> 
                        </dd>

                        <dt>MONTH TRADING</dt>
                        <dd>Ce service est destiné à tous ceux qui veulent gagner hebdomadairement et mensuellement de l’argent avec la cryptomonnaie. Il est exclusivement réservé aux abonnés actifs.<br/>
                             Découvrez nos signaux d’achats et de vente et profitez pour faire le plein de cryptos<br/>
                            <button onClick={()=>history.push('/Help')} className="btn-crypto py-2 my-2">En savoir plus</button> 
                        </dd>
                    </dl>               
                </div>
                <div  className="trade-right">
                    
                </div>
            </div>
            <div className="container target">
                <div className="row">
                    <div className="col-11 mr-4 col-md-8">
                        <div className="row my-3">
                            <div className="col-12 target-img1 col-md-4"></div>
                            <div className="col-12 col-md-8">
                                <h5>Comment acheter des crypto-monnaies sur notre plate forme ?</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi obcaecati saepe expedita!</p>
                                <button onClick={()=>history.push('/Buy')} className="btn btn-lg btn-warning">ACHETER CRYPTO</button>
                            </div>
                        </div><hr/>
                        <div className="row my-3">
                            <div className="col-12 target-img2 col-md-4"></div>
                            <div className="col-12 col-md-8">
                                <h5>vous desirez revendre ou vendre votre crypto-monnaie !</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi obcaecati saepe expedita!</p>
                                <button onClick={()=>history.push('/Sell')} className="btn btn-lg btn-success">VENDRE CRYPTO</button>
                            </div>
                        </div><hr/>
                    </div>
                    <div className="col-11 text-sm-center target-bg my-4 col-md-4">
                        <div class="card" style={{width:'400px'}}>
                            <img class="card-img-top" src={tof} alt="Card image" />
                            <div class="card-body">
                                <h6 class="card-title">Court de la crypto 24/24 et 7jours.</h6>
                                <p class="card-text">abonnez vous à notre FAQ </p>
                                <a onClick={()=>history.push('/Help')} class="btn btn-crypto">En Savoir Plus</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="credit">
                <div className="credit-left w-sm-75">
                    <div className="credit-card"><img src={carte} alt='carte credit' /></div>
                </div>
                <div className="credit-right">
                    <h5>Nous sommes toujours disponibles pour que vous puissiez acheter une cryto-monnaie de chez vous chez nous.<br />
                         même les jours fériés lorsque
                         les banques sont fermées. Nous pouvons recharger votre carte bancaire pour vos operations</h5>
                    <p>Les transactions sont effectuées en quelques secondes lorsque vous échangez du
                         bitcoin (BTC) vers votre devise locale (fiat) et vice versa.
                    </p>
                        <div className='btn-credit'>
                            <h1 onClick={()=>history.push('/Credit')} className='btn btn-lg credit-title mt-5'>Achat Carte de Credit</h1>
                        </div> 
                </div>
            </div>
            <div className="parner">

            </div>
        </div>
    )
}

export default Crypto