import React from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

import './formulaire-recharge.css'

function FormulaireRecharge() {
  return (
      <div className='formulaireI w-100 mt-5 pt-5'>
                <h6 className='text-success d-block mx-5 px-5'>
                <i className="bx bxs-right-arrow-alt get-started-icon-card">< MdOutlineKeyboardBackspace /></i> <span className='fs-5'>Retour</span></h6>
            <div className="formulaire-content ">
                <form className='bg-light w-75 mx-auto formu'>
                    <h4 className='text-success text-center'>Reconduire Votre Carte</h4>

                    {/* partie de gauche du formulaire */}
                    <div className='formu-content mt-4 d-flex justify-content-around'>
                    <div className="formu-left">
                        <div class="form-group mb-3">
                            <label class="label" for="Prénom">Prénom</label>
                            <input type="text"  name="Prénom" class="form-control input-buy" placeholder="Prénom" required />
                        </div>
                        <div class="form-group mb-3">
                            <label class="label" for="Nom">Nom</label>
                            <input type="text"  name="Nom" class="form-control input-buy" placeholder="Nom" required />
                        </div>
                        <div class="form-group mb-3">
                            <label class="label" for="Couriel">Couriel</label>
                            <input type="text"  name="Couriel" class="form-control input-buy" placeholder="Couriel" required />
                        </div>
                        <div class="form-group mb-3">
                            <label class="label" for="Mobile">Mobile</label>
                            <input type="number"  name="Mobile" class="form-control input-buy" placeholder="Mobile" required />
                        </div>
                        <div class="form-group mb-3">
                            <label class="label" for="Boite Postale">Boite Postale</label>
                            <input type="text"  name="Boite Postale" class="form-control input-buy" placeholder="Boite Postale" required />
                        </div>
                    </div>
                    {/* partie de droite du formulaire */}
                    <div className="formu-right">
                        <div class="form-group mb-3">
                            <label class="label" for="Prénom">Prénom</label>
                            <input type="text"  name="Prénom" class="form-control input-buy" placeholder="Prénom" required />
                        </div>
                        <div class="form-group mb-3">
                            <label class="label" for="Nom">Nom</label>
                            <input type="text"  name="Nom" class="form-control input-buy" placeholder="Nom" required />
                        </div>
                        <div class="form-group mb-3">
                            <label class="label" for="Couriel">Couriel</label>
                            <input type="text"  name="Couriel" class="form-control input-buy" placeholder="Couriel" required />
                        </div>
                        <div class="form-group mb-3">
                            <label class="label" for="Mobile">Mobile</label>
                            <input type="number"  name="Mobile" class="form-control input-buy" placeholder="Mobile" required />
                        </div>
                        <div class="form-group mb-3">
                            <label class="label" for="Boite Postale">Boite Postale</label>
                            <input type="text"  name="Boite Postale" class="form-control input-buy" placeholder="Boite Postale" required />
                        </div>
                    </div>
                    </div>
                    
                    <button className='btn btn-outline-info '>Reconduire Votre Commande</button>
                </form>
          </div>
      </div>
  )
}

export default FormulaireRecharge;
