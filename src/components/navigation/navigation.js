import React from 'react';
import './navigation.css';

const Navigation = ({onRouteChange}) => {
	let element = (
		<div id='navigation'>
			<p onClick={() => onRouteChange('login')}>Sign Out</p>
		</div>
	);

	return element;
}

export default Navigation;