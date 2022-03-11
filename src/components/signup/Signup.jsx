import React, { useState } from 'react'
import { RiFacebookFill,RiTwitterFill } from 'react-icons/ri'
import { useHistory } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';

import './signup.css'

function Signup() {
	const [show, setShow] = useState(true);
	const [state, setState]=useState({nom: "", prenom: "", email: "", password: "", confirm: "", ville: "", pays: "", telephone: ""})
	const [errors, setErrors]=useState({password: false})
	const [fail, setFail]=useState(false)
	let history=useHistory()

	const handleChange=(target)=>{
		console.log(target.name)
		setState({...state, [target.name]: target.value})
		if(target.name==="confirm") {
			if(target.value===state.password) setErrors({password: false})
		}
	}

	const handleSubmit=(e)=>{
		e.preventDefault()
		console.log("the data ", state)
		if(state.password!==state.confirm) {
			setErrors({password: true})
			return
		} else {
			fetch('https://superkap-admin.herokuapp.com/users.json', {
				"method": "POST",
				"headers": {
					"Content-Type": "application/json"
				},
				"body": JSON.stringify(state)
			}).then(response=>response.json()).then(data=>{
				console.log("signup response ", data)
				history.push('/login')
			})
			.catch(error=>console.log("sign up error ", error))

		}
		return false
	}
	
	// console.log("the state ",state, errors)
    return (
		<div className="bg-signup">
        <div className='pb-sm-3 pb-md-0 signup shadow'>
            <div className="signup-left">
                <div className="signup-head">
					<h3 className='signup-title'>Sign up</h3>
					<p className="social-media d-flex justify-content-end">
						<a href="https://www.facebook.com/Superkap-102254418642682" className="social-icon d-flex align-items-center justify-content-center"><RiFacebookFill/></a>
						<a href="#" className="social-icon d-flex align-items-center justify-content-center"><RiTwitterFill /></a>
					</p>
			    </div>
                <form action="#" className="signup-form" onSubmit={(e)=>handleSubmit(e)} >
					{fail && (<Alert variant="danger" onClose={() => {setShow(!show); setFail(!fail)}} dismissible>
							<Alert.Heading>Oups! Vous avez une Erreur!</Alert.Heading>
							<p>
							Veuillez reprendre la procedure d'inscription en utilisant vos veritables arguments.
							</p>
						</Alert>)
					
					}


							<div className="form-group mb-2">
								<label className="label" for="name">Name</label>
								<input type="text" name="nom" className="form-control" placeholder="Name" required onChange={(e)=>handleChange(e.target)} />
							</div>
							<div className="form-group mb-2">
								<label className="label" for="name">prenom</label>
								<input type="text" name="prenom" className="form-control" placeholder="Name" required onChange={(e)=>handleChange(e.target)} />
							</div>
							<div className="form-group mb-2">
								<label className="label" for="name">Email</label>
								<input type="email" name="email" id="email" className="form-control" placeholder="Email" required onChange={(e)=>handleChange(e.target)} />
							</div>
							<div className="form-group mb-2">
								<label className="label" for="name">Telephone</label>
								<input type="phone" name="telephone" id="phone" className="form-control" placeholder="Email" required onChange={(e)=>handleChange(e.target)} />
							</div>
							<div className="form-group mb-2">
								<label className="label" for="name">Ville</label>
								<input type="text" name="ville" className="form-control" placeholder="Ville" required onChange={(e)=>handleChange(e.target)} />
							</div>
							<div className="form-group mb-2">
								<label className="label" for="name">Pays</label>
								<input type="text" name="pays" className="form-control" placeholder="Pays" required onChange={(e)=>handleChange(e.target)} />
							</div>
							<div className="form-group mb-2">
								<label className="label" for="name">Password</label>
								<input type="password" name="password" className="form-control" placeholder="password" required onChange={(e)=>handleChange(e.target)} />
							</div>
							<div className="form-group mb-2">
								<label className="label" for="password">Confirm Password</label>
								<input type="password" name="confirm" className="form-control" placeholder="confirm Password" required onChange={(e)=>handleChange(e.target)} />
								{errors.password && state.confirm && <span classNameName="text-danger">should match to password</span>}
							</div>
							<div className="form-group">
								<button type="submit" className="form-control btn btn-succes submit px-3">Sign up</button>
							</div>
							<div className="signup-down form-group">
								<a href="#">
									<div className="down-left">
										{/* connection */}
									</div>
								</a>
								<div className="down-right">
									{/* <a href="#">Forgot Password</a> */}
								</div>
							</div>
						</form>
            </div>
			<div classNameName="signup-right d-flex">
				<div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center">
					<div className="text w-100">
						<h2>Welcome to signup</h2>
						<p>already registered login ?</p>
						<a href="/login" className="btn btn-white">login</a>
					</div>
				</div>
			</div>
        </div>
		</div>
    )
}

export default Signup
