const express = require('express');
const { dbCONN } = require('./database/db');
require('dotenv').config();

const app = express(); //Creación de nuestro servidor

dbCONN();

app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'OK'
    })

})

app.listen( process.env.PORT, () => {
    console.log(`Conectado al puerto ${ process.env.PORT }`);
} )