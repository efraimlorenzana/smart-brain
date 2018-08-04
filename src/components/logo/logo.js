import React from 'react';
import './logo.css';
import Tilt from 'react-tilt';
import brain from './brain.png';

const Logo = () => {
	let element = (
		<div id="logo" className="m-2">
			<Tilt className="Tilt" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
			 <div className="Tilt-inner"><img alt='brain' src={brain} /></div>
			</Tilt>
		</div>
	);
	return element;
}

export default Logo;