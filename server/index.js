//Creando el servidor
const express = require('express');
const { dbCONN } = require('./database/db');
require('dotenv').config();


//Creacion de nuestro servidor
const app = express();

// dbCONN();

//Lectura del json
app.use( express.json() );

app.use( '', require('./routes/usuarios') );

app.listen( process.env.PORT, () => {
    console.log(`Conectado al puerto ${process.env.PORT}`);
} );