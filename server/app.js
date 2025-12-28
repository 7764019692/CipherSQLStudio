const express = require('express');
const cors = require('cors');
require('dotenv').config();

// MongoDB connection
const connectMongo = require('./db/mongo');

// Routes
const assignmentRoutes = require('./routes/assignment.routes');

const app = express();

/* -------------------- MIDDLEWARES -------------------- */
app.use(cors());
app.use(express.json());

/* -------------------- DB CONNECT -------------------- */
connectMongo();

/* -------------------- ROUTES -------------------- */
const executeRoutes = require('./routes/executeRoutes');

app.use(express.json());
app.use('/api/execute', executeRoutes);
// Health check route
app.get('/', (req, res) => {
  res.send('CipherSQLStudio Backend Running 🚀');
});

// Assignment APIs
app.use('/api/assignments', assignmentRoutes);

/* -------------------- SERVER START -------------------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const hintRoutes = require('./routes/hintRoutes');
app.use('/api/hint', hintRoutes);
