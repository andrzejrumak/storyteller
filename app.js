const express = require('express');
const mongoose =require('mongoose');

const app = express();

app.get('/', (req, res)=> {
  res.send(`It works on sever: localhost ${port}`);
})

const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});