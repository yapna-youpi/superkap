import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FiHeart } from 'react-icons/fi'

import './produit.css'
import img4 from './assets/fot4.jpg'

function Produit() {
    const history = useHistory();
    const data = {
        description:"Logement entier : Appartement ⋅ nilon bastos",
        titre:"LA CAVA pour deux personnes",
        capacite:"deux chambres - salon - cuisine - douche",
        ajout:"wifi gratuit - parking - lave linge",
        prix:"70000 F/mois"

    }
    const [appart, setAppart] = useState(data);

    return (
        <div>
            <div className="container">
                <div className={`content-section-heading text-center mt-5`}>
                                <h2 className="mb-5 til">Recement publier dans  les annonces</h2>
                            </div>
                <div className="row carros pt-3 mt-5">
                    <div  onClick={()=>history.push('/ProduitDetail')} className="col-12 col-md-4 "><img src={img4} alt='profili' className='shadow produit-fot'   /></div>
                    <div className="col-12 col-md-5 ">
                        <div className="col px-3 tex-1">{appart.description}</div>
                        <div className="col px-5 mt-md-2 tex-3">{appart.capacite}</div>
                        <div className="col px-5 tex-4">{appart.ajout}</div>    
                        <div className="col px-3   tex-2">{appart.titre}</div>
                        <div className="col px-4 tex-6"><FiHeart /></div>
                    </div>
                    <div className="col-12 d-none d-md-block col-md-3 ">
                        <div className="col tex-7">{appart.prix}</div>    
                        <div className="col tex-5">
                            <button  className="btn btn-lg btn-outline-success"
                                     onClick={()=>history.push('/ProduitDetail')}    
                            >     
                                voir plus
                            </button>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    )
}

export default Produit
