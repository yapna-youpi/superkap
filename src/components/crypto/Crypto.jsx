import React from 'react'
import { useHistory } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

import './crypto.css'
import img2 from './assets/tof2.jpeg'
import img1 from './assets/fem.jpg'
import tof from './assets/tof1.jpeg'
import logo from './assets/logo.png'
import care from './assets/care.png'
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
                    <Carousel fade>
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
                            src={img1}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>disponible sans aucun delai de paiement</h3>
                            <p>votre partenaire ideale.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
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
            <div className="trade">
                <div className="trade-left">
                    <h1>Nos services sur Blockchain</h1>
                    <p>Avec notre nouveau programme d'affiliation, vous aurez<br/> les outils les plus avancés du marché qui<br/>vous permettra de promouvoir Pursa et de générer des commissions avec nous !</p>
                    <dl>
                        <dt>INFOS CRYPTO</dt>
                        <dd>Initiation, perfectionnement et mise à jour des connaissances sur les plates-formes Crypto.</dd>

                        <dt>HOLDING.</dt>
                        <dd>N’achetez pas aveuglement toute crypto, faites confiance aux professionnels pour<br/>
                             vous aider à investir sur les projets les plus rentables. Il est exclusivement réservé aux abonnés actifs.<br/>
                            <button className="btn-crypto">En savoir plus</button> 
                        </dd>

                        <dt>MONTH TRADING</dt>
                        <dd>Ce service est destiné à tous ceux qui veulent gagner hebdomadairement et mensuellement de l’argent avec la cryptomonnaie. Il est exclusivement réservé aux abonnés actifs.<br/>
                             Découvrez nos signaux d’achats et de vente et profitez pour faire le plein de cryptos<br/>
                            <button className="btn-crypto">En savoir plus</button> 
                        </dd>
                    </dl>               
                </div>
                <div className="trade-right">
                    <p><img style={{width:'100%'}} src={tof} alt='image crypto' /></p>
                </div>
            </div>
            <div className="target-form">
                <div className="target-left">
                    <div className="target-right-head">
                        <img src={care} alt="image du trader" />
                    </div>
                    <div className="target-right-body">
                        <div onClick={()=>history.push('/Buy')} className="btn btn-lg target-buy">
                            <img className='img-logo' src={logo} alt='acheter' />
                            <span>Acheter</span>    
                        </div>  
                        <div  onClick={()=>history.push('/Sell')} className="btn btn-lg target-sell">
                            <img className='img-logo' src={logo} alt='vendre' />
                            <span>Vendre</span>   
                        </div>  
                    </div>
                </div>
                <div className="target-right">    
                    <h2>Comment acheter ou vendre votre crypto ?</h2>
                    <p>quel que soit le moyen de paiement utilisé. Désormais, vous pouvez échanger 
                        votre bitcoin au Cameroun contre MasterCard, MTN Mobile Money, 
                        Orange Money ou VISA de manière rapide, simple et sécurisée,
                    </p>
                    <p>il vous suffit juste d’émettre votre commande et vous 
                        serez servis dans les meilleurs délais et aux meilleurs prix du marché
                    </p>
                </div>
            </div>
            <div className="credit">
                <div className="credit-left">
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
