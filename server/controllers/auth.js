const {response} = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const { crearToken } = require('../helpers/jwt');
const { getMenu } = require('../helpers/menu');

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

        //Llamaos al token
        const token = await crearToken( usuarioDB.id );

        res.json({
            ok: true,
            msg: 'Logueado',
            usuarioDB,
            token,
            menu: getMenu( usuarioDB.rol )
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor comuniquese con el administrador'
        })
    }

}

const renovarToken = async( req, res = response ) => {

    const uid = req.uid;

    //Genera token
    const token = await crearToken(uid);

    //Obtenemos el usuario
    const usuario = await Usuario.findById(uid);

    res.json({
        ok: true,
        token,
        usuario,
        menu: getMenu( usuario.rol )
    })

}

module.exports = {
    login,
    renovarToken
}