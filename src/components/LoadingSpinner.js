import React from "react";
import "./LoadingSpinner.css"; // put the CSS you already have into this file

const LoadingSpinner = () => {
	return (
		<div className='sk-chase'>
			<div className='sk-chase-dot'></div>
			<div className='sk-chase-dot'></div>
			<div className='sk-chase-dot'></div>
			<div className='sk-chase-dot'></div>
			<div className='sk-chase-dot'></div>
			<div className='sk-chase-dot'></div>
		</div>
	);
};

export default LoadingSpinner;
