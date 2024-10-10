//only to initialize server and apply middleware
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const router = require('./routes/router');
const app = express() //express app

// middleware
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

const corsOption = {
    origin: '*',
    credentials: true,
    SuccessStatus: 200
}

app.use(cors(corsOption))

//use router
app.use('/api',router)

//server runs on 4000
const PORT = 4000
const server = app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}`)
})
