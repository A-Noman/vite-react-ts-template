const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const { logger, errorHandler } = require('./middleware/index');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);

// Routes
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;