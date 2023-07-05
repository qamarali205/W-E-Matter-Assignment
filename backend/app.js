const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();



// Middleware for parsing JSON request bodies
app.use(bodyParser.json());
app.use(cors());






//get seats




module.exports = app;