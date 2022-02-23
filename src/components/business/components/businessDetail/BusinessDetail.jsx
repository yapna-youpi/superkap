import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import { RiArrowRightUpFill } from 'react-icons/ri'
import SlideB from '../bootstrapSlide/SlideB';
import { connect } from 'react-redux';

import './businessDetail.css'


function BusinessDetail({ User, match }) {
    let history = useHistory()
    // if(!User.nom) { here
    //     history.push('/login')
    // }
    const [show, setShow] = useState(false);
    const [state, setState]=useState({})
    useEffect(()=>{
        fetch(`https://superkap-admin.herokuapp.com/articles/${match.params.id[1]}.json`)
            .then(response=>response.json()).then(data=>{
                console.log("the article ", data)
                setState(data)
            })
    }, [])

  return (
        <div className='businesDetail'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 mt-5 p-md-0 pt-md-5 p-lg-5 four">
                        <SlideB />
                    </div>                  
                    <div className="col-12 col-md-6 d-md-flex justify-content-around mt-5 pt-5">
                        <div className="div">
                            <h3>{state.nom}</h3>
                            <span className='ico-colore'  ><RiArrowRightUpFill /> En Stock: { state.quantite } </span>
                            <div className='ico-detail'>
                                <p style={{fontSize:'14px'}}>{state.descriptiion}</p>
                                <p style={{fontSize:'22px',color:'rgb(64, 211, 64)',fontWeight:'bold'}}>Prix Unique : {state.prix} XAF</p>
                                <hr/>
                                <p style={{fontSize:'15px'}}>vous noterez que nos produits apres commande ne sont ni repris , ni échangés.</p>
                            </div>
                            <button  className="btn btn-lg btn-secondary my-5 mx-auto d-block "
                                     onClick={()=>history.push('/FormulaireC')}    
                            >     
                                Contacter le fournisseur
                            </button>
                        </div>
                        <div className="div d-none d-md-block p-3">
                            <h5>DISTRIBUTION DE PRODUITS</h5>
                            <hr/>
                            <h6 className='ico-text'>Paiement sécurisé</h6>
                            <span>Naviguez en toute sécurité et effectuez un paiement sécurisé.</span>
                            <hr/>
                            <h6 className='ico-text'>norme et qualité</h6>
                            <span>Ce produit est agrée par la norme iso 9001.</span>
                            <hr/>
                            <h6 className='ico-text'>Livraison rapide</h6>
                            <span>Option de livraison rapide disponible sur ce produit.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=state=>({User: state.User})

export default connect(mapStateToProps)(BusinessDetail)
