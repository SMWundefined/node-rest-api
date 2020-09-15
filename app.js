//spins up expressJS
const express = require ('express');
const app = express();

//incoming request has to go through this
app.use((req, res, next) => {
    res.status(200).json({
        message: "It works like a boss!!"

    });
});

module.exports = app;

