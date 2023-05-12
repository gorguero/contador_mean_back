const express = require('express'); 

const app = express(); //Creación de nuestro servidor

app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'OK'
    })
    
})

app.listen( 5000, () => {
    console.log('Conectado al puerto 5000')
} )