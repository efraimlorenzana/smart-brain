import React from 'react';
import './rank.css';

const Rank = ({user}) => {
	let element = (
		<div id="rank" className='text-center text-white'>
			<p>hey {user.name}, your rank is ...</p>
			<h2>#{user.entries}</h2>
		</div>
	);
	return element;
}

export default Rank;