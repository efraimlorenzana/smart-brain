import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imgURL,box}) => {
	let boxLoc = {
		top: box.top,
		left: box.left,
		right: box.right,
		bottom: box.bottom
	}
	let element = (
		<div id='FaceRecognition'>
			<div className='w-50 position-relative'>
				<img id='clarifaiImg' className='w-100' alt='' src={imgURL} />
				<div className='bounding-box' style={boxLoc}></div>
			</div>
		</div>
	);

	return element;
}

export default FaceRecognition;