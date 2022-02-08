import React from 'react'
import { useHistory } from 'react-router-dom'

import './maison.css'

function Maison() {
    let history = useHistory(); 
    return (
        <div>
            <div className="home-immo shadow container my-5 pb-3">
                <h2 className='text-left py-3 mt-4' style={{paddingLeft:'3%',fontWeight:'bold'}}>Maisons et Appartements Disponibles</h2>
                <div className="row d-flex justify-content-around">
                    <div onClick={()=>history.push('/Immo2')} className="col-11  immo-card2 col-md-5 p-5">
                        <h4 className='.h-immo-content'>profiter au maximum de ces lieux empreints de sérénité</h4>
                    </div>
                    <div onClick={()=>history.push('/Immo2')} className="col-11 mt-5  mt-md-0 immo-card1 col-md-5 p-5">
                        <h4 className='.h-immo-content'>un appartement,une destination ideale pour votre prochain séjour</h4>
                    </div>
                </div>
                 <div className="row">
                     <div onClick={()=>history.push('/Immo2')} className="btn btn-lg bg-info w-50 my-5 mx-auto">Voir Plus De Maison </div>
                 </div>
            </div>
        </div>
    )
}

export default Maison
