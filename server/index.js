//Creando el servidor
const express = require('express');
const { dbCONN } = require('./database/db');
require('dotenv').config();


//Creacion de nuestro servidor
const app = express();

// dbCONN();

// app.get('/', (req, res) => {

//     res.json({
//         ok: true,
//         msg: 'Conexión establecida'
//     })

// });

app.use( '', require('./routes/usuarios') );

app.listen( process.env.PORT, () => {
    console.log(`Conectado al puerto ${process.env.PORT}`);
} );