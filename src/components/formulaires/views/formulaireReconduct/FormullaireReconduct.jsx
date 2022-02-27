import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import ReactLoading from 'react-loading'

import './formulaire-reconduction.css'

function FormullaireReconduction(props) {
    const [state, setState] = useState({
        prenom: "", nom: "", proffession: "", birthday: "",
        adresse: "", bp: "", pays: "CAMEROUN", region: "", ville: "", telephone: ""
    })
    const [loading, setLoading]=useState(false)
    let history = useHistory()

    const handleChange = (target) => {
        console.log(target.name)
        setState({ ...state, [target.name]: target.value })
    }
    const handleSubmit=(e)=>{
		e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            e.target.reset()
            setLoading(false)
        }, 3000);
        return false
    }

    console.log("the state ", state)
    return (
        <div className='formulaireRecond w-100 mt-5 py-5 bg-light'>
            <h6 onClick={() => props.history.push('/Carte')} className='text-success d-block my-3 mx-auto px-5 w-75 txte'>
                <i className="bx bxs-right-arrow-alt get-started-icon-recond">< MdOutlineKeyboardBackspace /></i>
                <span className='fs-5 rec-text'>&nbsp; Retour</span>
            </h6>
            <div className="formulaire-content-rec ">
                <form className='bg-white w-75 mx-auto formu-rec ' onSubmit={(e)=>handleSubmit(e)}>
                    <h4 className='rec-text text-center'>Commander Votre Carte</h4>

                    {/* partie de gauche du formulaire */}
                    <div className='formu-content mt-4 d-flex justify-content-around row'>
                        <div className="formu-left col-12 col-md-6">
                            <div class="form-group mb-3">
                                <label class="label" for="Prénom">Prénom</label>
                                <input type="text" name="prenom" class="form-control input-buy" placeholder="Prénom" required 
                                    onChange={(e)=>handleChange(e.target)}
                                />
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="Nom">Nom</label>
                                <input type="text" name="nom" class="form-control input-buy" placeholder="Nom" required 
                                    onChange={(e)=>handleChange(e.target)}
                                />
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="Profession">Profession</label>
                                <input type="text" name="profession" class="form-control input-buy" placeholder="Profession" required 
                                    onChange={(e)=>handleChange(e.target)}
                                />
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="Date de Naissance">Date de Naissance</label>
                                <input type="date" name="birthday" class="form-control input-buy" placeholder="Date de Naissance" required 
                                    onChange={(e)=>handleChange(e.target)}
                                />
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="Adresse">Adresse</label>
                                <input type="text" name="adresse" class="form-control input-buy" placeholder="Adresse" required 
                                    onChange={(e)=>handleChange(e.target)}
                                />
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="Code Postale">Code Postale</label>
                                <input type="text" name="bp" class="form-control input-buy" placeholder="Code Postale" required 
                                    onChange={(e)=>handleChange(e.target)}
                                />
                            </div>
                        </div>
                        {/* partie de droite du formulaire */}
                        <div className="formu-right col-12 col-md-6">
                            <div className="form-group mb-3 ">
                                <label className='label' htmlFor="select">Choix du pays</label>
                                <select className="form-select" name="pays" aria-label="Default select example" onChange={(e)=>handleChange(e.target)}>
                                    <option value="CAMEROUN" >CAMEROUN</option>
                                    <option value="GABON/CONGO">GABON/CONGO brazzaville</option>
                                    {/* <option value="TCHAD/CENTRAFRIQUE-p3">TCHAD/CENTRAFRIQUE</option> */}
                                    <option value="RDC">RD CONGO</option>
                                    <option value="UMAO">CTE D'IVOIRE/MALI/SENEGAL</option>
                                    <option value="Autres">Autre Pays</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="region">region</label>
                                <input type="text" name="region" class="form-control input-buy" placeholder="region" required 
                                    onChange={(e)=>handleChange(e.target)}
                                />
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="ville">ville</label>
                                <input type="text" name="ville" class="form-control input-buy" placeholder="ville" required 
                                    onChange={(e)=>handleChange(e.target)}
                                />
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="Nature de la pièce">Nature de la pièce</label>
                                <input type="text" name="nature_piece" class="form-control input-buy" placeholder="Nature de la pièce" required 
                                    onChange={(e)=>handleChange(e.target)}
                                />
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="Email">Email</label>
                                <input type="text" name="email" class="form-control input-buy" placeholder="Email" required 
                                    onChange={(e)=>handleChange(e.target)}
                                />
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="name">Télephone</label>
                                <input type="tel" name="telephone" class="form-control input-buy" placeholder="Telephone"
                                    required onChange={(e)=>handleChange(e.target)}
                                />
                            </div>
                        </div>
                    </div>

                    <button className='btn btn-lg d-block mx-auto btn-rec my-3'>
                        { loading ? <ReactLoading type='spin' /> : "Passer Votre Commande" }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormullaireReconduction;
