import React from 'react'

import './produit.css'
import img4 from './assets/fot4.jpg'

function Produit() {
    return (
        <div>
            <div className="container">
                <div className={`content-section-heading text-center mt-5`}>
                                <h2 className="mb-5 til">Recement publier dans  les annonces</h2>
                            </div>
                <div className="row carros pt-3 mt-5">
                    <div className="col-12 col-md-4 "><img src={img4} alt='profili' className='shadow'   /></div>
                    <div className="col-12 col-md-5 ">
                        <div className="col px-3 tex-1">{"Logement entier : Appartement ⋅ nilon bastos"}</div>
                        <div className="col px-3  tex-2">{"LA CAVA pour deux personnes"}</div>
                        <div className="col px-3 mt-md-5 tex-3">{"deux chambres - salon - cuisine - douche"}</div>
                    </div>
                    <div className="col-12 d-none d-md-block col-md-3 ">
                        <div className="col tex-4">{"wifi gratuit - parking - lave linge"}</div>    
                        <div className="col tex-5">{"70000 f/moi"}</div>    
                    </div>
                </div>
            </div>           
        </div>
    )
}

export default Produit
