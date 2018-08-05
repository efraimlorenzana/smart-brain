import React from 'react';

const Register = ({onRouteChange}) => {
	let element = (
		<div id='login' className='mt-5 place-center'>
			<div className='divstyle'>
				<h2 className='hs'>Register</h2>
				<hr />
				<form className='px-5 pb-5'>
					<div className="form-group">
				    <label htmlFor="exampleInputEmail1">Fullname</label>
				    <input type="text" className="form-control cis" id="name" aria-describedby="nameHelp" placeholder="Enter Fullname" />
				 	</div>
					<div className="form-group">
					    <label htmlFor="exampleInputEmail1">Email address</label>
					    <input type="email" className="form-control cis" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
					</div>
					<div className="form-group">
					    <label htmlFor="exampleInputPassword1">Password</label>
					    <input type="password" className="form-control cis" id="exampleInputPassword1" placeholder="Password" />
					</div>
				  	<div className='text-right'>
					  <button onClick={() => onRouteChange('home')} type="Register" className="btn btn-danger mr-2">Register</button>
					</div>
				</form>
			</div>
		</div>
	);

	return element;
}

export default Register;