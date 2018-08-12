import React from 'react';
import './login.css';
import Server from '../../server';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputEmail: '',
			inputPassword: ''
		}
	}
	onInputEmail = (e) => {
		this.setState({ inputEmail: e.target.value });
	}
	onInputPassword = (e) => {
		this.setState({ inputPassword: e.target.value });
	}
	onSubmitLogin = () => {
		fetch(`${Server}login`,{
			method: 'post',
			headers: {'Content-Type' : 'application/json'},
			body : JSON.stringify({
				email: this.state.inputEmail,
				password: this.state.inputPassword
			})
		})
		.then(res => res.json())
		.then(data => {
			if(data === '404'){
				console.log('Failed');
				document.querySelector('#err').textContent = 'Incorrect Username or Password';
				document.querySelector('#err').classList.add('err');
			} else {
				this.props.onRouteChange('home');
				this.props.getCurrentUser(data);
			}
		})
	}
	render() {
		const { onRouteChange } = this.props;
		let element = (
			<div id='login' className='mt-5 place-center'>
				<div className='divstyle'>
					<h2 className='hs'>Login</h2>
					<div id='err' className='text-center'></div>
					<div className='px-5 pb-5'>
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Email address</label>
					    <input onChange={this.onInputEmail} type="email" className="form-control cis" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
					  </div>
					  <div className="form-group">
					    <label htmlFor="exampleInputPassword1">Password</label>
					    <input onChange={this.onInputPassword} type="password" className="form-control cis" id="exampleInputPassword1" placeholder="Password" />
					  </div>
					  	<div className='text-right'>
						  <button onClick={this.onSubmitLogin} className="btn btn-primary mr-2">Login</button>
						  <button onClick={() => onRouteChange('register')} className='btn btn-danger'>Register</button>
						</div>
					</div>
				</div>
			</div>
		);
	return element;
	}
}

export default LoginForm;