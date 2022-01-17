import React from 'react'

import './card.css'
import busi1 from './assets/images/tof3.jpg'
import busi2 from './assets/images/tof8.jpg'
import busi3 from './assets/images/tof9.jpg'
import busi4 from './assets/images/tof2.jpg'

function Card({name}) {
    return (
        <div>
            <div className="container mt-3 pt-5">
                <h2 className='tex-title' style={{paddingLeft:'3%',fontWeight:'bold'}}>{name}</h2>
                <div className="row my-4">
                    <div className=" pt-2 shadow mx-auto col-11 col-sm-6 col-lg-3 text-center business-product">
                        <img className="image-busi" src={busi1} alt="product1" />
                        <h4 className="text-left" >Chaine de venise</h4>
                        <button className='btn  text-white btn-command'>Commander</button>
                        <p className='tex text-left'>$90.00</p>
                    </div>
                    <div className="pt-2 shadow mx-auto col-11 col-sm-6 col-lg-3 text-center  business-product">
                        <img className="image-busi" src={busi2} alt="product2" />
                        <h4 className="text-left" >Chaine de venise</h4>
                        <button className='btn  text-white btn-command'>Commander</button>
                        <p className='tex text-left'>$90.00</p>
                    </div>
                    <div className="pt-2 shadow mx-auto col-11 col-sm-6 col-lg-3 text-center  business-product">
                        <img className="image-busi" src={busi3} alt="product3" />
                        <h4 className="text-left" >Chaine de venise</h4>
                        <button className='btn text-white btn-command'>Commander</button>
                        <p className='tex text-left'>$90.00</p>
                    </div>
                    <div className="pt-2 shadow mx-auto col-11 col-sm-6 col-lg-3 text-center  business-product">
                        <img className="image-busi" src={busi4} alt="product4" />
                        <h4 className="text-left" >Chaine de venise</h4>
                        <button className='btn  text-white btn-command'>Commander</button>
                        <p className='tex text-left'>$90.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
