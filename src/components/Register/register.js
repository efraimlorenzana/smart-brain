import React from 'react';
import Obj from '../Function/object';
import Server from '../../server';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userdata: {}
		}
	}
	onValuesChange = (e) => {
		this.setState({userdata: Obj(this.state.userdata,e.target.name,e.target.value)});
	}
	onSubmit = () => {
		fetch(`${Server}register`,{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(this.state.userdata)
		})
		.then(res => res.json())
		.then(data => {
			if(data.success){
				this.props.onRouteChange('home');
				this.props.getCurrentUser(data.user);
			} else {
				let err = document.querySelector('#err');
				err.innerHTML = `<strong>${data.err.severity} </strong> ` + data.err.detail;
				err.classList.add('err');
			}
		})
		.catch(console.log);
	}
	render() {
		let element = (
			<div id='login' className='mt-5 place-center'>
				<div className='divstyle'>
					<h2 className='hs'>Register</h2>
					<div id='err'></div>
					<div className='px-5 pb-5'>
						<div className="form-group">
					    <label htmlFor="exampleInputEmail1">Fullname</label>
					    <input name="name" required onChange={this.onValuesChange} type="text" className="form-control cis" id="name" aria-describedby="nameHelp" placeholder="Enter Fullname" />
					 	</div>
						<div className="form-group">
						    <label htmlFor="exampleInputEmail1">Email address</label>
						    <input name="email" required onChange={this.onValuesChange} type="email" className="form-control cis" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
						</div>
						<div className="form-group">
						    <label htmlFor="exampleInputPassword1">Password</label>
						    <input name="password" required onChange={this.onValuesChange} type="password" className="form-control cis" id="exampleInputPassword1" placeholder="Password" />
						</div>
					  	<div className='text-right'>
						  <button onClick={this.onSubmit} name="Register" className="btn btn-danger mr-2">Register</button>
						</div>
					</div>
				</div>
			</div>
		);

		return element;
	}
}

export default Register;