// Requires 
const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./routes/index.router');
const port = process.env || 4501;