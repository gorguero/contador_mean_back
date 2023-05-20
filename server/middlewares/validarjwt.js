const { response } = require("express");
const jwt = require('jsonwebtoken');

const validarToken = (req, res = response, next) => {

    //Leer el token
    const token = req.header('x-token');

    if( !token ){
        return res.status(400).json({
            ok: false,
            msg: 'No existe el token'
        });
    }

    try {
        
        const { uid } = jwt.verify(token, process.env.secretPrivateKey);
        console.log(uid);

    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: 'Token no válido'
        })
    }

    next();
}


module.exports = {
    validarToken
}