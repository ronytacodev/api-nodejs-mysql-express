const express = require('express')
const mysql = require('mysql')
const mycon = require('express-myconnection')

const app = express()
app.set('port',process.env.PORT || 9000)

// middlewares -------------------------------
// me quedé en el min 09:25

// routes -------------------------------------
app.get('/', (req, res) => {
    res.send('welcome to my API')
})

// server running -------------------------------
app.listen(app.get('port'), () => {
    console.log('server running on port', app.get('port'))
})
