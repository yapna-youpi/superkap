import React, { useState } from 'react'
import { RiFacebookFill,RiTwitterFill } from 'react-icons/ri'
import { useHistory } from 'react-router-dom'
import styles from './signup.css'

function Signup() {
	const [state, setState]=useState({name: "", email: "", password: "", confirm: ""})
	const [errors, setErrors]=useState({password: false})
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
		if(state.password!==state.confirm) {
			setErrors({password: true})
			return
		} else {
			history.push('/')
			return false
		}
	}
	
	console.log(state, errors)
    return (
		<div className="bg-signup">
        <div className='signup'>
            <div className="signup-left">
                <div class="signup-head">
					<h3 class='signup-title'>Sign up</h3>
					<p class="social-media d-flex justify-content-end">
						<a href="#" class="social-icon d-flex align-items-center justify-content-center"><RiFacebookFill/></a>
						<a href="#" class="social-icon d-flex align-items-center justify-content-center"><RiTwitterFill /></a>
					</p>
			    </div>
                <form action="#" class="signup-form" onSubmit={(e)=>handleSubmit(e)} >
							<div class="form-group mb-2">
								<label class="label" for="name">Name</label>
								<input type="text" name="name" class="name" class="form-control" placeholder="Name" required onChange={(e)=>handleChange(e.target)} />
							</div>
							<div class="form-group mb-2">
								<label class="label" for="name">Email</label>
								<input type="email" name="email" id="emeil" class="form-control" placeholder="Email" required onChange={(e)=>handleChange(e.target)} />
							</div>
							<div class="form-group mb-2">
								<label class="label" for="name">Password</label>
								<input type="password" name="password" class="form-control" placeholder="password" required onChange={(e)=>handleChange(e.target)} />
							</div>
							<div class="form-group mb-2">
								<label class="label" for="password">Confirm Password</label>
								<input type="password" name="confirm" class="form-control" placeholder="confirm Password" required onChange={(e)=>handleChange(e.target)} />
								{errors.password && state.confirm && <span className="text-danger">should match to password</span>}
							</div>
							<div class="form-group">
								<button type="submit" class="form-control btn btn-succes submit px-3">Sign up</button>
							</div>
							<div class="signup-down form-group">
								<a href="#">
									<div class="down-left">
										connection
									</div>
								</a>
								<div class="down-right">
									<a href="#">Forgot Password</a>
								</div>
							</div>
						</form>
            </div>
			<div className="signup-right d-flex">
				<div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center">
					<div class="text w-100">
						<h2>Welcome to signup</h2>
						<p>already registered login ?</p>
						<a href="/login" class="btn btn-white">login</a>
					</div>
				</div>
			</div>
        </div>
		</div>
    )
}

export default Signup
