import React from 'react';
import { useHistory } from 'react-router-dom'
import { MdOutlineShoppingCart } from 'react-icons/md'

import './brique.css'
function Brique({Modalite}) {
    
    let history = useHistory();

    return (
            <div className=" pt-2 shadow mx-auto col-11 col-sm-6 col-lg-3 text-center business-product">
                <img onClick={()=>history.push('/BusinessDetail')}  className="image-busi" src={Modalite.image} alt="product1" />
                <h6 className="text-left mt-2" >{Modalite.titre}</h6>
                <button onClick={()=>history.push('/BusinessDetail')} className='btn text-white btn-command'><span className='ico-color'>< MdOutlineShoppingCart /></span> Commander</button>
                <p className='tex text-left'>{Modalite.prix}</p>
                
            </div>
        )
}

export default Brique;
