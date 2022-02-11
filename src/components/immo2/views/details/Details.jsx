import React, { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import { AiOutlineHome } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Caroussel from '../../components/bootstrapSlide/SlideB'

import './details.css'
import fot1 from '../../assets/fot1.jpg'
import fot2 from '../../assets/fot2.jpg'
import fot3 from '../../assets/fot3.jpg'
import fot4 from '../../assets/fot4.jpg'
import fot5 from '../../assets/fot5.jpg'
import logo from './logo-superkap.png'

function Details({match}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handle= ()=>{
        handleClose();
        history.push('/');
    }

    const [state, setState]=useState({})
    let history = useHistory();
    useEffect(()=>{
        fetch(`https://superkap-admin.herokuapp.com/immobiliers/${match.params.id[1]}.json`)
            .then(response=>response.json()).then(data=>{
                console.log("the appart ", data)
                setState(data)
            })
    }, [])

    console.log("the state ", match, state)
    return (
        <div className="appart-details">
            <div className="head">
                <h1>{state.titre}</h1>
                <div className="info">
                    <span> <FaStar className="star" size={15} color="#00B67A" /> {state.parking && "Parking"} </span>
                    <span>info 2 sans gras</span>
                    <span>info 3 </span>
                </div>
                <div className="images">
                    <div className="poster">
                        {/* <img className='img-detail' src={fot1} alt=""/> */}
                        <Caroussel />
                    </div>
                    <div className="thumbnails">
                        <img className='img-detail' src={fot2} alt=""/>
                        <img className='img-detail' src={fot3} alt=""/>
                        <img className='img-detail' src={fot4} alt=""/>
                        <img className='img-detail' src={fot5} alt=""/>
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="description">
                    <h2><AiOutlineHome size={20} /> {state.lieu} : {state.ville}</h2>
                    <span>{state.nombre_salon} Salon <b>·</b> {state.nombre_chambre} Chambre(s) <b>·</b> {state.nombre_douche} Salle(s) de bain <b>·</b> 1,5 salle de bain</span>
                </div>
                <div className="price">
                    <h3>{state.prix} XAF</h3>
                    <span>Payable en plusieurs fois <b>·</b> transaction avec notaire </span>
                </div>
            </div>
            <div className="row">
              <div className="col">
                  {/* <p>Ma maison est située en position stratégique. À deux pas de la gare (1 heure de train de Milan) et du port (ferry-boats et bateaux à destination de toutes les localités du lac)!</p> */}
                  <h6 style={{fontWeight:"bold"}}>Le logement :</h6>
                  <p>{state.detail}</p>
              </div>
            </div>
            <div className="row carros mt-3">
              <div className="col col-md-6">

              </div>
              <div className="col col-md-6 d-block d-sm-flex pt-3">
                  <div className="col d-none d-sm-block"></div>
                  <div className="col">
                    <p style={{fontSize:"12px"}}>Pour protéger votre paiement, ne transférez jamais d'argent et ne communiquez pas en dehors du site ou de l'application Airbnb.</p>
                    <button onClick={handleShow} className='btn btn-outline-secondary'>contacter l'hôte</button>
                  </div>
              </div>
            </div>

            <div className='mt-5'>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton >
                    <Modal.Title><img style={{width:'150px'}} src={logo} /></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Felicitation vous venez de reserver un Logement chez Superkap!</h5>
                        <h5>Nous vous contacterons d'ici peut merci!</h5>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="success" onClick={handle} >
                        fermer
                    </Button>
                        
                    </Modal.Footer>
                </Modal>
                
            </div>
        </div>
    )
}

export default Details
