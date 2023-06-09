const express = require('express');
const cors = require('cors');
const { dbCONN } = require('./database/db');
require('dotenv').config();

const app = express(); //Creación de nuestro servidor

dbCONN(); //Coneccion con la bd 

app.use( cors() ); //cors

app.use( express.json() ); //Lectura del json

app.use( '/usuarios', require('./routes/usuarios') );
app.use( '/documentos', require('./routes/documentos') );
app.use( '/busqueda', require('./routes/busqueda') );
app.use( '/login', require('./routes/auth') );
app.use( '/upload', require('./routes/upload') );

app.listen( process.env.PORT, () => {
    console.log(`Conectado al puerto ${ process.env.PORT }`);
} )