import React from 'react';
import { useHistory } from 'react-router-dom'
import { MdOutlineShoppingCart } from 'react-icons/md'

import './brique.css'
function Brique({modalite}) {
    console.log(console.log("la modalite ", modalite))
    let history = useHistory();

    return (
            <div className=" pt-2 shadow mx-auto col-11 col-sm-6 col-lg-3 text-center business-product"
            >
                <img   className="image-busi" src={modalite.image} alt="product1" />
                <h6 className="text-left mt-2" >{modalite.nom}</h6>
                <button onClick={()=>history.push('/BusinessDetail/:'+modalite.id)} className='btn text-white btn-command'><span className='ico-color'>< MdOutlineShoppingCart /></span> Commander</button>
                <p className='tex text-left'>{modalite.prix}</p>
                
            </div>
        )
}

export default Brique;
