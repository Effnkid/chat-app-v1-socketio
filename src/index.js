import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
