import React from 'react';

import './formulaire-immo.css'

function FormullaireImmo() {
  return (
      <div className='formulaireI w-100 mt-5 pt-5'>
                <h1 className='text-center'>Commander Votre Carte</h1>
            <div className="formulaire-content ">
                <form className=''>
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
                    <button className='btn btn-outline-success '>Passer Votre Commande</button>
                </form>
          </div>
      </div>
  )
}

export default FormullaireImmo;
