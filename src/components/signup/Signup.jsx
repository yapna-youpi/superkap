import React from 'react'
import { RiFacebookFill,RiTwitterFill } from 'react-icons/ri'
import styles from './signup.css'

function Signup() {

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
                <form action="#" class="signup-form">
							<div class="form-group mb-2">
								<label class="label" for="name">Name</label>
								<input type="text" class="name" class="form-control" placeholder="Name" required/>
							</div>
							<div class="form-group mb-2">
								<label class="label" for="name">Email</label>
								<input type="email" id="emeil" class="form-control" placeholder="Email" required/>
							</div>
							<div class="form-group mb-2">
								<label class="label" for="name">Password</label>
								<input type="password" class="form-control" placeholder="password" required/>
							</div>
							<div class="form-group mb-2">
								<label class="label" for="password">Password</label>
								<input type="passwo"  class="form-control" placeholder="confirm Password" required/>
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
						<a href="#" class="btn btn-white">login</a>
					</div>
				</div>
			</div>
        </div>
		</div>
    )
}

export default Signup
