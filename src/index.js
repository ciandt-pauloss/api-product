const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_, res) => res.send('Server OK!'));

app.listen(port, () => {
    console.log(`Server runing on port: ${port}!`);
});