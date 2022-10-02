import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Chat from './features/chat/Chat';
import Login from './features/login/Login';
export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route index element={<Login />} />
				<Route path="/:userId" element={<Chat />} />
			</Routes>
		</div>
	);
}
