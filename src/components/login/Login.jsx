import React from 'react'
import { RiFacebookFill,RiTwitterFill } from 'react-icons/ri'
import styles from './login.css'

function Login() {
    return (
        <div className='login'>
            <div className="login-left">
                <div class="d-flex">
                    <div class="w-100">
                        <h3 class="mb-4">Sign In</h3>
                    </div>
                    <div class="w-100">
                        <p class="social-media d-flex justify-content-end">
                            <a href="#" class="social-icon d-flex align-items-center justify-content-center"><RiFacebookFill/></a>
                            <a href="#" class="social-icon d-flex align-items-center justify-content-center"><RiTwitterFill /></a>
                        </p>
                    </div>
			    </div>
                <form action="#" class="signin-form">
							<div class="form-group mb-3">
								<label class="label" for="name">Username</label>
								<input type="text" class="form-control" placeholder="Username" required/>
							</div>
							<div class="form-group mb-3">
								<label class="label" for="password">Password</label>
								<input type="password" class="form-control" placeholder="Password" required/>
							</div>
							<div class="form-group">
								<button type="submit" class="form-control btn btn-primary submit px-3">Sign In</button>
							</div>
							<div class="form-group d-md-flex">
								<div class="w-50 text-left">
									<label class="checkbox-wrap checkbox-primary mb-0">Remember Me
										<input type="checkbox" checked/>
										<span class="checkmark"></span>
									</label>
								</div>
								<div class="w-50 text-md-right">
									<a href="#">Forgot Password</a>
								</div>
							</div>
						</form>
            </div>
            <div className="login-right"></div>
        </div>
    )
}

export default Login
