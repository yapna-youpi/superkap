import React from 'react';
import { useHistory } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { connect } from 'react-redux';

import './formulairec.css'
import bitcoin from './assets/bitcoin.png'
import payeer from './assets/payeer.png'
import usdt from './assets/usdt.png'
import carte from './assets/carte.png'
import mobile from './assets/mobile.png'
import tof3 from '../../assets/tof3.jpg'

function FormulaireC({User, match }) {
    const history =  useHistory();
    if(!User.nom) {
        history.push('/login')
    }
	const [payment, setPayment] = React.useState({});
	const [value, setValue] = React.useState('female');
	const [item, setItem] = React.useState({})
	React.useEffect(() => {
		fetch(`https://superkap-admin.herokuapp.com/articles/${match.params.id[1]}.json`)
			.then(response => response.json()).then(data => {
				console.log("the article ", data)
				setItem(data)
			})
	}, [])

	const handleChange = (event) => {
		setPayment(event.target.value);
	}
	const command = () => {
		if (!payeer) alert("vous devez choisir um mode de payement")
		else {
			const body={
				user_id: User.id,
				article_id: match.params.id[1],
				payment: payment
			}
			fetch("https://superkap-admin.herokuapp.com/commandes.json", {
				"method": "POST",
				"headers": {
					"Content-Type": "application/json"
				},
				"body": JSON.stringify(body)
			})
				.then(response => {
					if(response.status!==200) alert("echec de la commande")
					console.log(response);
				})
				.catch(err => {
					alert("echec de la commande")
				});
		}
	}

	console.log("the item ", item, payment)

	return (
		<>
			<h1 className='mt-5 pt-5 text-center' style={{ color: '#282c3f' }}>Commander Vos Articles</h1>
			<div className="formulairec container-fluid mt-5 d-md-flex justify-content-around">
				<div className="command-left col-12 col-md-8">
					<h4 className='px-3 mt-3'>Details de la facturation</h4>
					<hr />
					<div className="product-details">
						<h2> {item.nom} : <span>{item.prix} XAF</span> </h2>
						<img src={tof3} alt="vetement" />
					</div>
					<>
						{/* <form>
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
                                  <option value="TCHAD/CENTRAFRIQUE-p3">TCHAD/CENTRAFRIQUE</option>
                                  <option value="RDC-p4">RD CONGO</option>
                                  <option value="UMAO-p5">CTE D'IVOIRE/MALI/SENEGAL/BENIN/BURKINA FASO/GUINE CONAKRY</option>
                                  <option value="Autres-p6">Autre Pays</option>
                              </select>
                          </div>
                          <div className="form-group my-4">
                              <label className='label' htmlFor="select">Choix de la ville</label>
                              <select className="form-select" name="country" aria-label="Default select example" onChange={(e)=>handleChange(e.target)}>
                                  <option value="CAMEROUN-p1" >Centre</option>
                                  <option value="GABON/CONGO-p2">Littoral</option>
                                  <option value="TCHAD/CENTRAFRIQUE-p3">TCHAD/CENTRAFRIQUE</option>
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
                
              </form> */}
					</>
				</div>
				<div className="command-right col-12 col-md-3 mb-3 pb-4 px-3">
					<h5 className=' mt-3'>Details de la commande</h5>
					<hr />
					<h6 className='d-flex'><span style={{ display: 'block', width: "40%" }}>Produit</span> <span style={{ display: 'block', width: "60%" }}>{"maison casanova ruby"}</span></h6>
					<hr />
					<h6 className='d-flex'><span style={{ display: 'block', width: "70%" }}>frais d'expédition</span> <span style={{ display: 'block', width: "28%" }}> + 1000 xaf</span></h6>
					<hr />
					<h6 className='d-flex'><span style={{ display: 'block', width: "70%" }}>T.V.A</span> <span style={{ display: 'block', width: "28%" }}> {Math.round(item.prix * 0.1925)} xaf</span></h6>
					<hr />
					<h6 className='d-flex'><span style={{ display: 'block', width: "70%" }}>Total</span> <span style={{ display: 'block', width: "28%" }}> {Math.round(item.prix * 1.1925) + 1000} xaf</span></h6>
					<hr />
					<FormControl>
						<FormLabel id="demo-controlled-radio-buttons-group">Paiement</FormLabel>
						<RadioGroup
							aria-labelledby="demo-controlled-radio-buttons-group"
							name="controlled-radio-buttons-group"
							value={payment}
							onChange={(e) => handleChange(e)}
						>
							<p className='pa'><FormControlLabel value="Bitcoin" control={<Radio />} label="Bitcoin" /><img className='imagi' src={bitcoin} alt="bitcoin" /></p>
							<p className='pa'><FormControlLabel value="Usdt" control={<Radio />} label="Usdt" /><img style={{ width: "40px" }} src={usdt} alt="usdt" /></p>
							<p className='pa'><FormControlLabel value="Payeer" control={<Radio />} label="Payeer" /><img style={{ width: "80px" }} src={payeer} alt="payeer" /></p>
							<p className='pa'><FormControlLabel value="Carte de credit" control={<Radio />} label="Carte de credit" /><img style={{ width: "65px" }} src={carte} alt="carte" /></p>
							<p className='pa'><FormControlLabel value="Paiement Mobile" control={<Radio />} label="Paiement Mobile" /><img style={{ width: "55px" }} src={mobile} alt="mobile" /></p>
						</RadioGroup>
					</FormControl>
					<button className='btn btn-lg mt-3 bg-success w-100'onClick={command}>
						Confirmer la Commande
					</button>
				</div>
			</div>
		</>
	)
}

const mapStateToProps = state => ({ User: state.User })

export default connect(mapStateToProps)(FormulaireC)
