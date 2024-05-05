import React from 'react';

const Button = ({ children = 'Default', addClass, event }) => {
	return (
		<button
			className={`py-3 px-3 text-white rounded-lg  hover:brightness-110 w-full ${addClass}`}
			onClick={event}>
			{children}
		</button>
	);
};

export default Button;
