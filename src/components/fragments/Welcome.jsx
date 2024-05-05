import Button from '@components/elements/Button';
import React from 'react';

export const Welcome = ({ event }) => {
	return (
		<div className='flex-col p-6 rounded-md bg-slate-200'>
			<h1>Welcome, Viery!</h1>
			<Button
				addClass='bg-red-700'
				event={event}>
				<i className='fa fa-rocket'></i> Let's Go!
			</Button>
		</div>
	);
};
