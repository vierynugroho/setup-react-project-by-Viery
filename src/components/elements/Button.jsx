import React from 'react';

const Button = ({ children = 'Default', type = 'bg-slate-500', addClass, event }) => {
	return (
		<button
			className={`py-3 px-3 ${type} text-white rounded-lg  hover:brightness-110 w-full ${addClass}`}
			onClick={event}>
			{children}
		</button>
	);
};

export default Button;
