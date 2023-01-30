const express = require('express');

const app = express();
const hostname = '127.0.0.1'
const PORT = 5000

app.get('/', (req, res)=>{
    res.send('fhdfhfdh');
})

app.listen(PORT, ()=>{
    console.log(`Server has started on: https://${hostname}:${PORT}`);
})