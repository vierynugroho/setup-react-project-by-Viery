import Button from '@components/elements/Button';
import { HomePage } from '@pages/HomePage';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const App = () => {
	return (
		<>
			<Toaster />
			<HomePage />
		</>
	);
};

export default App;
