import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { AiOutlineHome } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './details.css'
import fot1 from '../../assets/fot1.jpg'
import fot2 from '../../assets/fot2.jpg'
import fot3 from '../../assets/fot3.jpg'
import fot4 from '../../assets/fot4.jpg'
import fot5 from '../../assets/fot5.jpg'

function Details() {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let history = useHistory();
    const handle = () =>{
        handleClose();
        history.push('/');
    }
    return (
        <div className="appart-details">
            <div className="head">
                <h1>Chulavista Dome</h1>
                <div className="info">
                    <span> <FaStar className="star" size={15} color="#00B67A" /> info 1 en gras</span>
                    <span>info 2 sans gras</span>
                    <span>info 3 </span>
                </div>
                <div className="images">
                    <div className="poster">
                        <img className='img-detail' src={fot1} alt=""/>
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
                    <h2><AiOutlineHome size={20} /> Cabane dans les arbres <b>·</b> Hôte : Anna</h2>
                    <span>3 voyageurs <b>·</b> 1 chambre <b>·</b> 2 lits <b>·</b> 1,5 salle de bain</span>
                </div>
                <div className="price">
                    <h3>2 000 000 XAF</h3>
                    <span>Payable en plusieurs fois <b>·</b> transaction avec notaire </span>
                </div>
            </div>
            <div className="row">
              <div className="col">
                  <p>Ma maison est située en position stratégique. À deux pas de la gare (1 heure de train de Milan) et du port (ferry-boats et bateaux à destination de toutes les localités du lac)!</p>
                  <h6 style={{fontWeight:"bold"}}>Le logement :</h6>
                  <p>L’appartement se compose de pièces spacieuses et agréables avec deux chambres à coucher (dans celle avec un grand lit on peut en ajouter un troisième), une salle de séjour, une grande cuisine</p>
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
                    <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Felicitation vous venez de reserver un Logement chez Superkap!
                        <p>Nous vous contacterons d'ici peut merci!</p>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handle} >
                        fermer
                    </Button>
                        
                    </Modal.Footer>
                </Modal>
                
            </div>
        </div>
    )
}

export default Details
