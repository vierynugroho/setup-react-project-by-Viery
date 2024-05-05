import React from 'react';
import toast from 'react-hot-toast';

import { Master } from '@components/layouts/Master';
import { Welcome } from '@components/fragments/Welcome';

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
				<Welcome event={letsGo} />
			</Master>
		</>
	);
};
