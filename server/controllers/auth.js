const {response} = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');

const login = async(req, res = response) => {

    const {email, password} = req.body;

    try {

        //Verificar email
        const usuarioDB = await Usuario.findOne({ email });
        if( !usuarioDB ){
            res.status(404).json({
                ok:false,
                msg: 'Correo no válido'
            });
        }

        //Verificar password
        const passwordDB = bcrypt.compareSync(password, usuarioDB.password);
        if( !passwordDB ){
            res.status(404).json({
                ok: false,
                msg: 'Contraseña no váida'
            });
        }

        res.json({
            ok: true,
            msg: 'Logueado'
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor comuniquese con el administrador'
        })
    }

}



module.exports = {
    login,
}