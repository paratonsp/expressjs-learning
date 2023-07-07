const express = require('express');

const app = express();

const port = process.env.PORT || 8080; 

app.get('/', (req, res) => {
    res.status(200).json({success: true, message: 'expressjs-learning'});
});

app.use((err, req, res, next) => {
    res.status(err.status || 400).json({
        success: false,
        message: err.message || 'An error occured.',
        errors: err.error || [],
    });
});

app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Resource not found.' });
});

app.listen(port, () => {
    console.log(`listen on port: ${port}`);
});

module.exports = app;