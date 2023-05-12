const express = require('express');
require('dotenv').config();

const app = express(); //Creación de nuestro servidor

app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'OK'
    })

})

app.listen( process.env.PORT, () => {
    console.log(`Conectado al puerto ${ process.env.PORT }`);
} )