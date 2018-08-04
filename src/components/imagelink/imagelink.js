import React from 'react';
import './imagelink.css';

const ImageLink = ({onInputChange,onButtonSubmit}) => {
	let element = (
		<div id='imagelink'>
			<div className="text-center">
				<p>This Smart Brain will detect faces in your picture! Give it a try</p>
			</div>
			<div className='place-center'>
				<div className='drop-shadow p-4 pattern'>
					<div className='input-group'>
						<input onChange={onInputChange} className='form-control'	type='text' placeholder='Enter Image Link Here ...' />
						<button onClick={onButtonSubmit} className='btn btn-outline-primary'>Detect</button>
					</div>
				</div>
			</div>
		</div>
	);
	return element;
}

export default ImageLink;