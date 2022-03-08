import React, { useState } from 'react'
import { RiFacebookFill,RiTwitterFill } from 'react-icons/ri'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import Alert from 'react-bootstrap/Alert';

import styles from './login.css'
import { setUser } from '../../store/actions'

function Login({dispatch}) {

	const [state, setState]=useState({email: "", password: ""})
	const [fail, setFail]=useState(false)
	const [show, setShow] = useState(true);

	let history=useHistory()

	const handleChange=(target)=>{
		setState({...state, [target.name]: target.value})
	}
	const handleSubmit=(e)=>{
		e.preventDefault()
		fetch('https://superkap-admin.herokuapp.com/login', {
			"method": "POST",
			"headers": {
				"Content-Type": "application/json"
			},
			"body": JSON.stringify(state)
		}).then(response=>{
			if(response.status===200) return response.json() 
			else setFail(true)
		}).then(data=>{
			if(data) {
				console.log("the data ", data)
				dispatch(setUser(data[0]))
				history.push('/')

			}
		})
		.catch(error=>console.log("sign up error ", error))
		return false
	}

	// console.log("the state ", dispatch)
    return (
		<div className="bg-login">
        <div className='login pt-5 pt-md-0 pb-sm-3 pb-md-0 shadow'>
            <div className="shadow shadow-md-none login-left">
			{fail && (<Alert variant="danger" onClose={() => {setShow(!show); setFail(!fail)}} dismissible>
							<Alert.Heading>Oh snap! You got an error!</Alert.Heading>
							<p>
							Change this and that and try again. Duis mollis, est non commodo
							luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
							Cras mattis consectetur purus sit amet fermentum.
							</p>
						</Alert>)

			}
                <div class="login-head">
					<h3 class='login-title'>Sign In</h3>
					<p class="social-media  d-flex justify-content-end">
						<a href="https://www.facebook.com/Superkap-102254418642682" class="social-icon d-flex align-items-center justify-content-center"><RiFacebookFill/></a>
						<a href="#" class="social-icon d-flex align-items-center justify-content-center"><RiTwitterFill /></a>
					</p>
			    </div>
                <form action="#" class="login-form" onSubmit={(e)=>handleSubmit(e)}>
						<div class="form-group mb-3">
							<label class="label" for="name">Email</label>
							<input type="email" name="email" class="form-control " placeholder="Username" required onChange={(e)=>handleChange(e.target)} />
						</div>
						<div class="form-group mb-3">
							<label class="label" for="password">Password</label>
							<input type="password" name="password" class="form-control" placeholder="Password" required onChange={(e)=>handleChange(e.target)} />
						</div>
						<div class="form-group">
							<button type="submit" class="form-control btn btn-succes submit px-3">Sign In</button>
						</div>
						<div class="login-down form-group">
							<a href="/signup">
								<div class="down-left">
									Sign up
								</div>
							</a>
							<div class="down-right">
								<a href="#">Forgot Password</a>
							</div>
						</div>
				</form>
            </div>
			<div className="login-right d-flex">
				<div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center">
					<div class="text w-100">
						<h2>Welcome to login</h2>
						<p>Don't have an account?</p>
						<a href="/signup" class="btn btn-white">Sign Up</a>
					</div>
				</div>
			</div>
        </div>
		</div>
    )
}

const mapStateToProps=state=>({User: state.User})

export default connect(mapStateToProps)(Login)




