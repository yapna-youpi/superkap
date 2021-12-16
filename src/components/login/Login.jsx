import React from 'react'
import { RiFacebookFill,RiTwitterFill } from 'react-icons/ri'
import styles from './login.css'

function Login() {

    return (
		<div className="bg-login">
        <div className='login'>
            <div className="login-left">
                <div class="login-head">
					<h3 class='login-title'>Sign In</h3>
					<p class="social-media d-flex justify-content-end">
						<a href="#" class="social-icon d-flex align-items-center justify-content-center"><RiFacebookFill/></a>
						<a href="#" class="social-icon d-flex align-items-center justify-content-center"><RiTwitterFill /></a>
					</p>
			    </div>
                <form action="#" class="login-form">
							<div class="form-group mb-3">
								<label class="label" for="name">Username</label>
								<input type="text" class="form-control" placeholder="Username" required/>
							</div>
							<div class="form-group mb-3">
								<label class="label" for="password">Password</label>
								<input type="password" class="form-control" placeholder="Password" required/>
							</div>
							<div class="form-group">
								<button type="submit" class="form-control btn btn-succes submit px-3">Sign In</button>
							</div>
							<div class="login-down form-group">
								<a href="#">
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
						<a href="#" class="btn btn-white">Sign Up</a>
					</div>
				</div>
			</div>
        </div>
		</div>
    )
}

export default Login
