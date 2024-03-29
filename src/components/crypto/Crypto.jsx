import React from 'react'
import { useHistory } from 'react-router-dom'
import AOS from 'aos';

import './crypto.css'
import Caroussel from './carrousssel/Caroussel'
import Service from './service/Service'
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

    AOS.init();

    const history = useHistory();
    
    return (

        <div className="crypto">
            <div className="banner-content">
                <div className="banner">
                    <Caroussel />
                </div>
            </div>
            <Service />
            <div className="container">
                <div className="row">
                    <div className="col col-md-3"></div>
                    <div className="col col-md-3"></div>
                    <div className="col col-md-3"></div>
                    <div className="col col-md-3"></div>
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
            <div className="trad pt-5 pb-2">
                <h1 className='text-center '>Découvrez Nos Services Cryptos</h1>
               <hr width="10%" className='ligne-c' />
                <p className='text-center mb-5 mt-3'>Nous mettons à la disposition de nos membres, plusieurs services ainsi que des avantages particuliers :</p>
            </div>
            <div className="trade pb-4 ">
                <div className="trade-left pt-3 p-4 p-md-0">
                    <dl>
                        <dt data-aos="fade-right" data-aos-delay="0">HOLDING</dt>
                        <dd data-aos="fade-right" >
                            <span >En suivant nos conseils,  vous N’achèterez pas aveuglement toute crypto.<br/>
                                Nous vous indiquons les projets les plus rentables sur le long terme, en utilisant les stratégies les plus performantes<br/>
                                Ce service est réservé exclusivement aux abonnés VIP. Il coûte 100 USDT par AN.
                            </span><br/><br/>
                            <button 
                                className="btn-crypto py-2 my-2"
                                onClick={()=>history.push('/Help')} data-aos="fade-right"  
                            >
                                En savoir plus
                            </button> 
                        </dd>
                        <br />
                        <dt data-aos="fade-right" data-aos-delay="40">HOLDING MENSUEL</dt>
                        <dd data-aos="fade-right">
                            <span>Ce service est destiné à tous ceux qui veulent gagner hebdomadairement et mensuellement de l’argent avec la cryptomonnaie. Il est exclusivement réservé aux abonnés actifs.
                                Découvrez nos signaux d’achats et de vente et profitez pour faire le plein de cryptos
                            </span><br/><br/>
                            <button 
                                className="btn-crypto py-2 my-2"
                                onClick={()=>history.push('/Help')} data-aos="fade-right" data-aos-delay="30"
                                >
                                    En savoir plus
                            </button> 
                        </dd>
                    </dl>               
                </div>
                <div  className="trade-right" data-aos="zoom-in">

                </div>
            </div>
            <div className="container target">
                <div className="row">
                    <div className="col-11 mr-4 col-md-8">
                        <div className="row my-5">
                            <div className="col-12 target-img1 col-md-4"></div>
                            <div className="col-12 col-md-8">
                                <h3>Comment acheter des crypto-monnaies sur notre plate forme ?</h3>
                                <h6 className='mb-4 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi obcaecati saepe expedita!</h6>
                                <button onClick={()=>history.push('/Buy')} className="btn btn-lg btn-warning">ACHETER CRYPTO</button>
                            </div>
                        </div><hr/>
                        <div className="row my-5">
                            <div className="col-12 target-img2 col-md-4"></div>
                            <div className="col-12 col-md-8">
                                <h3>vous desirez revendre ou vendre votre crypto-monnaie !</h3>
                                <h6  className='mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi obcaecati saepe expedita!</h6>
                                <button onClick={()=>history.push('/Sell')} className="btn btn-lg btn-success">VENDRE CRYPTO</button>
                            </div>
                        </div><hr/>
                    </div>
                    <div className="col-11 text-sm-center target-bg my-4 col-md-4 pt-5">
                        <div className="card mt-5">
                            <img className="card-img-top img-car" src={tof} alt="Card" />
                            <div className="card-body">
                                <h6 className="card-title">Court de la crypto 24/24 et 7jours.</h6>
                                <p className="card-text">abonnez vous à notre FAQ </p>
                                <span onClick={()=>history.push('/Help')} className="btn btn-crypto2">En Savoir Plus</span>
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
                    <h5 className='text-title'>Nous sommes toujours disponibles pour que vous puissiez acheter une cryto-monnaie de chez vous chez nous.<br />
                         même les jours fériés lorsque
                         les banques sont fermées. Nous pouvons recharger votre carte bancaire pour vos operations</h5>
                    <p className='text-title'>Les transactions sont effectuées en quelques secondes lorsque vous échangez du
                         bitcoin (BTC) vers votre devise locale (fiat) et vice versa.
                    </p>
                        <div className='btn-credit'>
                            <h1 onClick={()=>history.push('/Carte')} className='btn btn-lg credit-title mt-5'>Achat Carte de Credit</h1>
                        </div> 
                </div>
            </div>
            <div className="parner">

            </div>
        </div>
     
    )
}

export default Crypto
