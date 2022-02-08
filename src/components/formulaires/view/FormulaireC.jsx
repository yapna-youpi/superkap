import React from 'react';
import PhoneInput from '../component/PhoneInput'

import '../assets/formulaire.css'

function FormulaireC() {
  return (
    <div className="main-w3layouts wrapper formulaire mt-5">
        <h3 className='text-center'>FORMULAIRE DE COMMANDE DE VOTRE CARTE VISA BSIC</h3>
        <div className="main-agileinfo">
            <div className="agileits-top">
                <form action="#" method="post">
                    <input className="text" type="text" name="nom" placeholder="Nom" required="" />
                    <input className="text" type="text" name="prenom" placeholder="Prénom" required="" />
                    <input className="text" type="text" name="profession" placeholder="Profession" required="" />
                    <input className="text" type="text" name="date" placeholder="DATE DE NAISSANCE " required="" />
                    <input className="text" type="text" name="adresse" placeholder="Adresse" required="" />
                    <input className="text" type="text" name="ville" placeholder="Ville" required="" />
                    <input className="text" type="text" name="region" placeholder="Region" required="" />
                    <input className="text" type="text" name="pays" placeholder="Pays" required="" />
                    <input className="text" type="text" name="postal" placeholder="Code Postal" required="" />
                    <input className="text" type="text" name="cni" placeholder="CNI ou Passeport" required="" />
                    <input className="text" type="text" name="number" placeholder="N° Piece" required="" />
                    <input className="text email" type="email" name="email" placeholder="Email" required="" />
                    <div className="form-group">
                        <PhoneInput label='Numéro Téléphone' name="number" />
                    </div>
                    <div className="wthree-text">
                        <label className="anim">
                            <input type="checkbox" className="checkbox" required="" />
                            <span>I Agree To The Terms & Conditions</span>
                        </label>
                        <div className="clear"> </div>
                    </div>
                    <input type="submit" value="SIGNUP" />
                </form>
                <p>Don't have an Account? <a href="#"> Login Now!</a></p>
            </div>
        </div>
        <ul className="colorlib-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
  )
}

export default FormulaireC;
