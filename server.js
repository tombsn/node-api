const app = require("./app");
require('dotenv').config({ path: './.env' });

//Database
const mongoose = require('mongoose');
mongoose.set('runValidators', true);

try {
    mongoose.connect(
        "mongodb://localhost:27017/node-api",
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        },
    )
    .catch((err) => {
        console.log(err);
    })
    // test if connection is ok
    var db = mongoose.connection;
    db.once("open", function () {
        console.log("Connection to mongo bdd is OK");
    });
    
} catch (err) {
    console.log(err);
}

// Server startup
const port = process.env.port;
const server = app.listen(port, () => {console.log(`Server started on port ${port}`)});

module.exports = server;