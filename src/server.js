const express = require('express');
const app = express();

app.get('/', (_, res) => 
    res.status(200).send({ result: 'Server OK!!' }));

module.exports = {
    app
};