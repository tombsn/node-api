const app = require("./app");
require('dotenv').config({ path: './.env' });

//Database
require('./config/dbConfig');

// Server startup
const port = process.env.port;
const server = app.listen(port, () => {console.log(`Server started on port ${port}`)});

module.exports = server;