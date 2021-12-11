import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import './crypto.css'
import img1 from '../../assets/tof2.jpeg'
import img2 from '../../assets/6.jpg'
import tof from '../../assets/tof1.png'

function Crypto() {
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
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="trade">
                <div className="trade-left">
                    <h1>Ours services on Blockchain</h1>
                    <p>With our new affiliate program, you will have<br/> the most advanced tools in the market that <br/>will allow you to promote Pursa and generate commissions with us!</p>
                    <dl>
                        <dt>INFOS CRYPTO</dt>
                        <dd>Initiation, perfectionnement et mise à jour des connaissances sur les plates-formes Crypto.</dd>

                        <dt>HOLDING.</dt>
                        <dd>N’achetez pas aveuglement toute crypto, faites confiance aux professionnels pour<br/>
                             vous aider à investir sur les projets les plus rentables. Il est exclusivement réservé aux abonnés actifs.<br/>
                            <button className="btn-crypto">learn more</button> 
                        </dd>

                        <dt>MONTH TRADING</dt>
                        <dd>Ce service est destiné à tous ceux qui veulent gagner hebdomadairement et mensuellement de l’argent avec la cryptomonnaie. Il est exclusivement réservé aux abonnés actifs.<br/>
                             Découvrez nos signaux d’achats et de vente et profitez pour faire le plein de cryptos<br/>
                            <button className="btn-crypto">learn more</button> 
                        </dd>
                    </dl>               
                </div>
                <div className="trade-right">
                    <p><img src={tof} alt='image crypto' /></p>
                </div>
            </div>
            <div className="credit">
                <div className="credit-left">
                    <h1>CREDIT CARD</h1>
                    <p>Transactions are completed in seconds when you exchange from<br/> bitcoin (BTC) to your local currency (fiat) and vice versa.</p>
                </div>
                <div className="credit-right"></div>
            </div>
            <div className="parner">

            </div>
        </div>
    )
}

export default Crypto
