import React from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

import './formulaire-immo.css'

function FormullaireImmo(props) {
    console.log(props)
  return (
      <div className='formulaireI w-100 mt-5 py-5'>
                <h6  className='text-success d-block my-3 mx-auto px-5 w-75'>
                    <i onClick={()=>props.history.push('/Carte')} className="bx bxs-right-arrow-alt get-started-icon-card txte">< MdOutlineKeyboardBackspace /></i> 
                    <span onClick={()=>props.history.push('/Carte')} className='fs-5 txte'>&nbsp; Retour</span>
                </h6>
            <div className="formulaire-content ">
                <form className='bg-light w-75 mx-auto formu'>
                    <h4 className='text-success text-center'>Commander Votre Carte</h4>

                    {/* partie de gauche du formulaire */}
                    <div className='formu-content mt-4 d-flex justify-content-around row'>
                        <div className="formu-left col-12 col-md-6">
                            <div class="form-group mb-3">
                                <label class="label" for="Prénom">Prénom</label>
                                <input type="text"  name="Prénom" class="form-control input-buy" placeholder="Prénom" required />
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="Nom">Nom</label>
                                <input type="text"  name="Nom" class="form-control input-buy" placeholder="Nom" required />
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="Profession">Profession</label>
                                <input type="text"  name="Profession" class="form-control input-buy" placeholder="Profession" required />
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="Date de Naissance">Date de Naissance</label>
                                <input type="date"  name="Date de Naissance" class="form-control input-buy" placeholder="Date de Naissance" required />
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="Adresse">Adresse</label>
                                <input type="text"  name="Adresse" class="form-control input-buy" placeholder="Adresse" required />
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="Code Postale">Code Postale</label>
                                <input type="text"  name="Code Postale" class="form-control input-buy" placeholder="Code Postale" required />
                            </div>
                        </div>
                        {/* partie de droite du formulaire */}
                        <div className="formu-right col-12 col-md-6">
                            <div className="form-group mb-3 ">
                                <label className='label' htmlFor="select">Choix du pays</label>
                                <select className="form-select" name="country" aria-label="Default select example">
                                    <option value="CAMEROUN-p1" >CAMEROUN</option>
                                    <option value="GABON/CONGO-p2">GABON/CONGO brazza </option>
                                    {/* <option value="TCHAD/CENTRAFRIQUE-p3">TCHAD/CENTRAFRIQUE</option> */}
                                    <option value="RDC-p4">RD CONGO</option>
                                    <option value="UMAO-p5">CTE D'IVOIRE/MALI/SENEGAL</option>
                                    <option value="Autres-p6">Autre Pays</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="region">region</label>
                                <input type="text"  name="region" class="form-control input-buy" placeholder="region" required />
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="ville">ville</label>
                                <input type="text"  name="ville" class="form-control input-buy" placeholder="ville" required />
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="Nature de la pièce">Nature de la pièce</label>
                                <input type="text"  name="Nature de la pièce" class="form-control input-buy" placeholder="Nature de la pièce" required />
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="Email">Email</label>
                                <input type="text"  name="Email" class="form-control input-buy" placeholder="Email" required />
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="name">Télephone</label>
                                <input type="tel" name="phone" class="form-control input-buy" placeholder="Telephone"
                                required/>
                            </div>
                        </div>
                    </div>
                    
                    <button className='btn btn-lg mt-4 d-block mx-auto bouton'>Passer Votre Commande</button>
                </form>
          </div>
      </div>
  )
}

export default FormullaireImmo;
