import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import './formulairec.css'

function FormulaireC() {
    
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

  return (
    <>
      <h1 className='mt-5 pt-5 text-center' style={{color:'#282c3f'}}>Commander Vos Articles</h1>
      <div className="formulairec container-fluid mt-5 d-md-flex justify-content-around">
          <div className="command-left col-12 col-md-8">
              <h5 className='px-3 mt-3'>Details de la facturation</h5>
              <form>
                  <div className="row">
                      <div className="col-12 col-md-6 shadow p-4">
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
                      <div className="col-12 col-md-6 shadow p-4">
                        <div class="form-group mb-3">
                          <label class="label" for="Adresse">Adresse</label>
                          <input type="text"  name="Adresse" class="form-control input-buy" placeholder="Adresse" required />
                        </div>
                        <div className="form-group my-2">
                              <label className='label' htmlFor="select">Choix du pays</label>
                              <select className="form-select" name="country" aria-label="Default select example" onChange={(e)=>handleChange(e.target)}>
                                  <option value="CAMEROUN-p1" >CAMEROUN</option>
                                  <option value="GABON/CONGO-p2">GABON/CONGO brazza </option>
                                  {/* <option value="TCHAD/CENTRAFRIQUE-p3">TCHAD/CENTRAFRIQUE</option> */}
                                  <option value="RDC-p4">RD CONGO</option>
                                  <option value="UMAO-p5">CTE D'IVOIRE/MALI/SENEGAL/BENIN/BURKINA FASO/GUINE CONAKRY</option>
                                  <option value="Autres-p6">Autre Pays</option>
                              </select>
                          </div>
                          <div className="form-group my-4">
                              <label className='label' htmlFor="select">Choix de la ville</label>
                              <select className="form-select" name="country" aria-label="Default select example" onChange={(e)=>handleChange(e.target)}>
                                  <option value="CAMEROUN-p1" >Centre</option>
                                  <option value="GABON/CONGO-p2">Littoral </option>
                                  {/* <option value="TCHAD/CENTRAFRIQUE-p3">TCHAD/CENTRAFRIQUE</option> */}
                                  <option value="RDC-p4">Ouest</option>
                                  <option value="UMAO-p5">Extrême Nord/Nord/Adamaoua</option>
                                  <option value="UMAO-p5">Est/Sud</option>
                                  <option value="UMAO-p5">Nord Ouest/Sud Ouest</option>
                                  <option value="Autres-p6">ville d'autres pays</option>
                              </select>
                          </div>
                        <TextField fullWidth label="Adresse Complete" id="Adresse" size="small" />
                      </div>
                  </div>
                
              </form>
          </div>
          <div className="command-right col-12 col-md-3 mb-3 pb-4 px-3">
              <h5 className=' mt-3'>Delai de la commande</h5>
              <hr/>
              <h6 className='d-flex'><span style={{display:'block',width:"40%"}}>Produit</span> <span style={{display:'block',width:"60%"}}>{"maison casanova ruby"}</span></h6>
              <hr/>
              <h6 className='d-flex'><span style={{display:'block',width:"70%"}}>frais d'expédition</span> <span style={{display:'block',width:"28%"}}> + 1000 xaf</span></h6>
              <hr/>
              <h6 className='d-flex'><span style={{display:'block',width:"70%"}}>T.V.A</span> <span style={{display:'block',width:"28%"}}> 0.00 xaf</span></h6>
              <hr/>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Paiement</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value="Bitcoin" control={<Radio />} label="Bitcoin" />
                    <FormControlLabel value="Usdt" control={<Radio />} label="Usdt" />
                    <FormControlLabel value="Payeer" control={<Radio />} label="Payeer" />
                    <FormControlLabel value="Carte de credit" control={<Radio />} label="Carte de credit" />
                    <FormControlLabel value="Paiement Mobile" control={<Radio />} label="Paiement Mobile" />
                </RadioGroup>
              </FormControl>
              <button className='btn btn-lg mt-3 bg-success w-100'>Confirmer la Commande</button>
          </div>
      </div>
    </>
  )
}

export default FormulaireC;
