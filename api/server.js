const express = require('express');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { createServer } = require('http');
const { Server } = require('socket.io');
const connectDB = require('./database/db'); // Your MongoDB connection file
const servicesConfig = require('./global-config/config'); // Your dynamic service routes

dotenv.config();

const PORT = process.env.PORT || 3500;

const app = express();
const server = createServer(app);

// === Allowed Origins ===
const allowedOrigins = [
  // here your allowed origins
  'http://localhost:3000',
  'https://your-allowed-origin.com',
];

// === Socket.io Setup ===
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  },
});

// === Socket.io Common Handler ===
io.on('connection', (socket) => {
  console.log(`✅ User connected: ${socket.id}`);

  socket.on('common', ({ type, payload }) => {
    console.log(`📨 Event Received - Type: ${type}`);
    console.log('📦 Payload:', payload);

    socket.broadcast.emit('common', { type, payload });
  });

  socket.on('disconnect', () => {
    console.log(`❌ User disconnected: ${socket.id}`);
  });
});

// === Database Connection ===
connectDB();

// === Middleware ===
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);
app.use(morgan('dev'));

// === Static File Hosting ===
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// === Health Check Route ===
app.get('/ping', (req, res) => {
  io.emit('common', {
    type: 'ping',
    payload: { message: 'Ping received' },
  });
  res.send({ message: 'Main Server is Running 🚀' });
});

// === Load Dynamic Service Routes ===
servicesConfig.forEach(({ path, filePath }) => {
  app.use(path, require(`./services/${filePath}/routes`));
});

// === Socket Test Route (Optional) ===
app.get('/socket', (req, res) => {
  io.emit('common', {
    type: 'chat',
    payload: { sender: 'Server', message: 'Hello from server!' },
  });
  res.send('Message sent to all via socket');
});

// === Start Server ===
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
