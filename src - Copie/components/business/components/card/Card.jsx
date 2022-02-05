import React from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { useHistory } from 'react-router-dom'

import './card.css'
import busi1 from './assets/images/tof3.jpg'
import busi2 from './assets/images/tof8.jpg'
import busi3 from './assets/images/tof9.jpg'
import busi4 from './assets/images/tof2.jpg'

function Card({name}) {
    let history = useHistory();

    return (
        <div>
            <div className="container mt-3 pt-5">
                <h2 className='tex-title' style={{paddingLeft:'3%',fontWeight:'bold'}}>{name}</h2>
                <div className="row my-4">
                    <div className=" pt-2 shadow mx-auto col-11 col-sm-6 col-lg-3 text-center business-product">
                        <img onClick={()=>history.push('/BusinessDetail')}  className="image-busi" src={busi1} alt="product1" />
                        <h4 className="text-left" >Chaine de venise</h4>
                        <button onClick={()=>history.push('/BusinessDetail')} className='btn  text-white btn-command'><span className='ico-color'>< MdOutlineShoppingCart /></span> Commander</button>
                        <p className='tex text-left'>90.00 XAF ou 30 Ussd</p>
                        
                    </div>
                    <div className="pt-2 shadow mx-auto col-11 col-sm-6 col-lg-3 text-center  business-product">
                        <img onClick={()=>history.push('/BusinessDetail')} className="image-busi" src={busi2} alt="product2" />
                        <h4 className="text-left" >Chaine de venise</h4>
                        <button onClick={()=>history.push('/BusinessDetail')} className='btn  text-white btn-command'><span className='ico-color'>< MdOutlineShoppingCart /></span> Commander</button>
                        <p className='tex text-left'>90.00 XAF ou 30 Ussd</p>
                    </div>
                    <div className="pt-2 shadow mx-auto col-11 col-sm-6 col-lg-3 text-center  business-product">
                        <img onClick={()=>history.push('/BusinessDetail')} className="image-busi" src={busi3} alt="product3" />
                        <h4 className="text-left" >Chaine de venise</h4>
                        <a href='localhost:3000/BusinessDetail'><button onClick={()=>history.push('/BusinessDetail')} className='btn text-white btn-command'><span className='ico-color'>< MdOutlineShoppingCart /></span> Commander</button></a>
                        <p className='tex text-left'>90.00 XAF ou 30 Ussd</p>
                    </div>
                    <div className="pt-2 shadow mx-auto col-11 col-sm-6 col-lg-3 text-center  business-product">
                        <img onClick={()=>history.push('/BusinessDetail')} className="image-busi" src={busi4} alt="product4" />
                        <h4 className="text-left" >Chaine de venise</h4>
                        <button onClick={()=>history.push('/BusinessDetail')} className='btn  text-white btn-command'><span className='ico-color'>< MdOutlineShoppingCart /></span> Commander</button>
                        <p className='tex text-left'>90.00 XAF ou 30 Ussd</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
