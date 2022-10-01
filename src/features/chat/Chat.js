import React from 'react';
import io from 'socket.io-client';

const socket = io.connect(`https://c14a-100-7-92-24.ngrok.io/`);

const Chat = () => {
	const [message, setMessage] = React.useState('');
	const [chat, setChat] = React.useState([]);

	const handleChange = (event) => {
		setMessage(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		socket.emit('chat message', message) && setMessage('');
	};

	const renderChat = () => {
		return chat.map(({ msg }, idx) => <li key={idx}> {msg} </li>);
	};

	React.useEffect(() => {
		socket.on('chat message recieve', (msg) => {
			setChat([...chat, { msg }]);
			window.scrollTo(0, document.body.scrollHeight);
		});
	});

	return (
		<div>
			<ul id="messages">{renderChat()}</ul>
			<form id="form" onSubmit={handleSubmit}>
				<input
					id="input"
					autoComplete="off"
					onChange={handleChange}
					value={message}
				/>
				<button type="submit"> Send </button>
			</form>
		</div>
	);
};

export default Chat;
