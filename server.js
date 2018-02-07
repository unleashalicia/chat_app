const express = require('express'); //install --save express cors in terminal

const PORT = process.env.PORT || 9000;

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>AppleJacks taste like apples?</h1>')
});

app.listen(PORT, ()=>{
    console.log('Server running on PORT: ', PORT);
});

//in terminal: node server.js

