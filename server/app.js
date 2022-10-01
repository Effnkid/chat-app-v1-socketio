const express = require('express');
const path = require('path');
const cors = require('cors');
const volleyball = require('volleyball');

const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');

const io = new Server(server, {
	cors: { origin: 'http://localhost:3000', methods: ['GET', 'POST'] },
});

// static middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(cors());
app.use(volleyball);

//this is where some things should go

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./api'));

//socket-io
io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('chat message', (msg) => {
		console.log('message: ' + msg);
		io.emit('chat message recieve', msg);
	});
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

app.get('*', (req, res, next) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = { app, server };
