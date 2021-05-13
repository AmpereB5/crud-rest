const express = require('express');
const app = express();
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(express.json());
app.use(cors());

//IMPORT ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/',(req, res) => {
    res.send('Homepage');
});



mongoose.connect(
    process.env.DBCON,
    {  useNewUrlParser: true },
    () => console.log('Connected to DB'));

app.listen(3000);