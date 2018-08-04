import React from 'react';
import './login.css';

const LoginForm = ({onRouteChange}) => {
	let element = (
		<div id='login' className='mt-5 place-center'>
			<div className='divstyle'>
				<h2 className='hs'>Login</h2>
				<hr />
				<form className='px-5 pb-5'>
				  <div className="form-group">
				    <label htmlFor="exampleInputEmail1">Email address</label>
				    <input type="email" className="form-control cis" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="exampleInputPassword1">Password</label>
				    <input type="password" className="form-control cis" id="exampleInputPassword1" placeholder="Password" />
				  </div>
				  	<div className='text-right'>
					  <button onClick={() => onRouteChange('home')} type="submit" className="btn btn-primary mr-2">Login</button>
					  <button className='btn btn-danger'>Register</button>
					</div>
				</form>
			</div>
		</div>
	);

	return element;
}

export default LoginForm;