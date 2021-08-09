const express = require('express');
const serverless = require('serverless-http');
const { fallthroughHandler } = require('./helpers');
const activations = require('./activations');

const app = express();

app.use(express.json({ extended: false }));
app.use('/', activations);
app.use(fallthroughHandler());

module.exports.handler = serverless(app);
module.exports.app = app;
