const express = require('express');

const app = express();

const port = process.env.PORT || 8080; 

app.get('/', (req, res) => {
    res.status(200);
    res.send('expressjs rest api');
});

app.listen(port, () => {
    console.log(`listen on port: ${port}`);
});

module.exports = app;