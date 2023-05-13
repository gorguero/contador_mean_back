const { response } = require('express');
const Usuario = require('../models/usuario');


const getUsuarios = (req, res) => {
    return res.json({
        ok: true,
        msg: 'Usuario obtenido'
    })
}

const crearUsuario = async(req, res = response) => {

    const { nombre, email, password } = req.body;

    try {
        
        const existeEmail = await Usuario.findOne({ email });

        if (existeEmail) {
            return res.status(400).json({
                ok: false,
                msg: "El correo ya está registrado"
            })
        }

        const usuario = new Usuario( req.body );

        //Guardar en la base de datos
        await usuario.save();

        res.json({
            ok: true,
            usuario
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al revisar los datos'
        })
    }

}

const actualizarUsuario = (req, res) => {
    return res.json({
        ok: true,
        msg: 'Usuario editao'
    })
}

const eliminarUsuario = (req, res) => {
    return res.json({
        ok: true,
        msg: 'Usuario eliminao'
    })
}

module.exports = {
    getUsuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
}