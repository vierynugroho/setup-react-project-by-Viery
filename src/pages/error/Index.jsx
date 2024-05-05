import Button from '@components/elements/Button';
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
	const error = useRouteError();

	return (
		<div className='flex items-center justify-center h-screen bg-gray-100'>
			<div className='p-8 bg-white rounded shadow-md'>
				<h1 className='mb-4 text-4xl font-bold'>
					Oops!
					<p className='text-2xl text-red-600 text-end'>
						{`${error.status} `}
						{error.statusText || error.message}
					</p>
				</h1>
				<p className='mb-8 text-gray-600'>Sorry, an unexpected error has occured</p>
				<Link to={'/'}>
					<Button addClass='bg-slate-800'>
						Back to Home <i className='fa-solid fa-people-pulling'></i>
					</Button>
				</Link>
			</div>
		</div>
	);
};
