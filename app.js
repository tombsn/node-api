//Permit to use variable environment
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();


app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


app.use(cors());
app.use(bodyParser.json());

//-------------------------------------Routers-------------------------------------//

//Ping
app.use("/", express.Router().get(
    "/", 
    async (req, res) => {
      return res.status(200).json();
    })
  );

app.use('/', require('./routes/route'));


module.exports = app