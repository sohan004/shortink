// node js version 20.7.0
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const port = process.env.PORT || 3014;

// Middlewares
dotenv.config();
app.use(cors());
app.use(express.json());

// Routes
app.use('/', require('./router/sortUrl'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`app listening at ${port}`)
});