/* eslint-disable no-console */
// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuid = require('uuid/v4');


// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

//broadcast to all
wss.broadcast = function broadcast(message) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === 1) {
      client.send(message);
    }
  });
}

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  let connectedUsers = {clients: wss.clients.size, type: 'clientCount'}
  wss.broadcast (JSON.stringify(connectedUsers));
  
  ws.on('message', function incoming(data) {
    const message = JSON.parse(data);
    message.id = uuid();
    wss.broadcast (JSON.stringify(message));
  });
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
// eslint-disable-next-line no-console
  ws.on('close', () => {
    console.log('Someone Disconnected')
  let connectedUsers = {clients: wss.clients.size, type: 'clientCount'}
  wss.broadcast (JSON.stringify(connectedUsers));
  })
});



