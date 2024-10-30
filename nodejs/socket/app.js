const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const { v4: uuidv4 } = require('uuid');  // Use UUID for unique user IDs

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Store connected clients
const clients = {};

// Set up WebSocket connection
wss.on('connection', (ws) => {
  // Assign a unique ID to the connected client
  const userId = uuidv4();
  clients[userId] = ws;
  console.log(`New client connected: ${userId}`);

  // Send a welcome message to the newly connected client
  ws.send(JSON.stringify({ message: `Welcome, your ID is ${userId}` }));

  // Handle messages from clients
  ws.on('message', (data) => {
    const message = JSON.parse(data);
    const targetId = message.targetId;
    const content = message.content;

    if (targetId && clients[targetId]) {
      // Send a message to the specific target client
      clients[targetId].send(JSON.stringify({ from: userId, content }));
    } else {
      // Broadcast to all clients if no targetId is provided
      Object.keys(clients).forEach((id) => {
        if (id !== userId && clients[id].readyState === WebSocket.OPEN) {
          clients[id].send(JSON.stringify({ from: userId, content }));
        }
      });
    }
  });

  // Remove the client when disconnected
  ws.on('close', () => {
    console.log(`Client disconnected: ${userId}`);
    delete clients[userId];
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
