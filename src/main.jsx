import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { HomePage } from '@pages/HomePage';
import { ErrorPage } from '@pages/error/Index';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Toaster />
		<RouterProvider router={router} />
	</React.StrictMode>
);
