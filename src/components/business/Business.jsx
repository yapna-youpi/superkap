import React from 'react'
import { MdOutlineStarOutline } from 'react-icons/md'
import { MdOutlineStarPurple500 } from 'react-icons/md'

import './business.css'
import busi1 from './assets/images/tof3.jpg'
import busi2 from './assets/images/tof8.jpg'
import busi3 from './assets/images/tof9.jpg'
import busi4 from './assets/images/tof2.jpg'


function Business() {
    return (
        <div className='business' id="business">
            <div className="container mt-5 pt-5">
                <h2 className='tex-title'>Featured products</h2>
                <div className="row my-4">
                    <div className=" pt-2 shadow col-11 col-sm-6 col-lg-3 text-center business-product">
                        <img className="image-busi" src={busi1} alt="image product" />
                        <h4 className="text-left" >Chaine de venise</h4>
                        <div className="text-left rating">
                            <MdOutlineStarPurple500  color="#00a654" />
                            <MdOutlineStarPurple500 color="#00a654"/>
                            <MdOutlineStarPurple500 color="#00a654"/>
                            <MdOutlineStarPurple500 color="#00a654"/>
                            <MdOutlineStarOutline />
                        </div>
                        <p className='tex text-left'>$90.00</p>
                    </div>
                    <div className="pt-2 shadow col-11 col-sm-6 col-lg-3 text-center  business-product">
                        <img className="image-busi" src={busi2} alt="image2 product2" />
                        <h4 className="text-left" >Chaine de venise</h4>
                        <div className="text-left rating">
                            <MdOutlineStarPurple500 color="#00a654"/>
                            <MdOutlineStarPurple500 color="#00a654"/>
                            <MdOutlineStarPurple500 color="#00a654"/>
                            <MdOutlineStarPurple500 color="#00a654"/>
                            <MdOutlineStarOutline />
                        </div>
                        <p className='tex text-left'>$90.00</p>
                    </div>
                    <div className="pt-2 shadow col-11 col-sm-6 col-lg-3 text-center  business-product">
                        <img className="image-busi" src={busi3} alt="image3 product3" />
                        <h4 className="text-left" >Chaine de venise</h4>
                        <div className="text-left rating">
                            <MdOutlineStarPurple500 color="#00a654"/>
                            <MdOutlineStarPurple500 color="#00a654"/>
                            <MdOutlineStarPurple500 color="#00a654"/>
                            <MdOutlineStarPurple500 color="#00a654"/>
                            <MdOutlineStarOutline />
                        </div>
                        <p className='tex text-left'>$90.00</p>
                    </div>
                    <div className="pt-2 shadow col-11 col-sm-6 col-lg-3 text-center  business-product">
                        <img className="image-busi" src={busi4} alt="image4 product4" />
                        <h4 className="text-left" >Chaine de venise</h4>
                        <div className="text-left rating">
                            <MdOutlineStarPurple500 color="#00a654"/>
                            <MdOutlineStarPurple500 color="#00a654"/>
                            <MdOutlineStarPurple500 color="#00a654"/>
                            <MdOutlineStarPurple500 color="#00a654"/>
                            <MdOutlineStarOutline />
                        </div>
                        <p className='tex text-left'>$90.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business
