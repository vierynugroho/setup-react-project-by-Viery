import React from 'react';
import toast from 'react-hot-toast';

import Button from '@components/elements/Button';

import { Master } from '@components/layouts/Master';

export const HomePage = () => {
	const letsGo = (e) => {
		e.preventDefault();

		toast.success("Let's Go!", {
			style: {
				backgroundColor: 'green',
				color: 'white',
			},
			iconTheme: {
				primary: 'white',
				secondary: 'green',
			},
		});
	};

	return (
		<>
			<Master>
				<div className='flex-col bg-slate-200 p-6 rounded-md'>
					<h1>Welcome, Viery!</h1>
					<Button
						type='bg-red-700'
						event={letsGo}>
						<i className='fa fa-rocket'></i> Let's Go!
					</Button>
				</div>
			</Master>
		</>
	);
};
