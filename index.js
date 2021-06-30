const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from api')
})

app.listen(8000, () => {
    console.log('api running at 8000')
})