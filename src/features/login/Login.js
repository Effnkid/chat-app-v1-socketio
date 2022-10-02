import React from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
	const navigate = useNavigate();
	const [user, setUser] = React.useState({
		name: '',
		color: '#000000',
		room: 'room_1',
	});

	const handleChange = (prop) => (event) => {
		setUser({ ...user, [prop]: event.target.value });
	};
	const handleName = () => {
		navigate(`/${user.name}`, { state: user });
	};

	return (
		<div className="login-container">
			<input type="color" onChange={handleChange('color')} value={user.color} />
			<input
				type="text"
				placeholder="Enter a name..."
				onChange={handleChange('name')}
				style={{ color: user.color }}
				onKeyDown={(event) => event.key === 'Enter' && handleName()}
			/>
			<select name="rooms" id="" onChange={handleChange('room')}>
				<option value={`room_1`}> room 1 </option>
				<option value={`room_2`}> room 2</option>
				<option value={`room_3`}> room 3 </option>
				<option value={`room_4`}> room 4 </option>
				<option value={`room_5`}> room 5 </option>
			</select>
			<button onClick={handleName}>&#10146;</button>
		</div>
	);
};

export default Login;
