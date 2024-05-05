import React from 'react';

export const Master = ({ children }) => {
	return (
		<div className='flex justify-center min-h-screen items-center'>
			<div className='font-bold'>{children}</div>;
		</div>
	);
};
