const { response } = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const {crearToken} = require('../helpers/jwt');

const getUsuarios = async(req, res = response) => {
    
    const usuarios = await Usuario.find({}, 'nombre email curp telefono role pdf');

    res.json({
        ok: true,
        usuarios
    });

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

        //Encriptación de la contraseña
        const salt = bcrypt.genSaltSync(); //Genera la encriptacion
        usuario.password = bcrypt.hashSync( password, salt );

        //Guardar en la base de datos
        await usuario.save();

        const token = await crearToken( usuario.id );

        res.json({
            ok: true,
            usuario,
            token
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al revisar los datos'
        })
    }

}

const actualizarUsuario = async(req, res = response) => {
    
    const uid = req.params.id;

    try {
        
        const existeUsuarioDB = await Usuario.findById( uid );

        if( !existeUsuarioDB ){
            return res.status(404).json({
                ok: false,
                msg: 'No existe usuario con ese ID'
            })
        }

        //Actualizacion de los datos
        const { password, email, ...campos } = req.body;

        if(existeUsuarioDB.email != email){

            const existeEmail = await Usuario.findOne({ email });

            if(existeEmail){
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe un usuario con ese email'
                })
            }

        }
        
        campos.email = email;
        const usuarioActualizado = await Usuario.findByIdAndUpdate( uid, campos, { new: true } );

        res.json({
            ok: true,
            usuario: usuarioActualizado
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al revisar los datos'
        })
    }

}

const eliminarUsuario = async(req, res = response) => {
    
    const uid = req.params.id;

    try {
        
        const existeUsuarioDB = await Usuario.findById( uid );

        if( !existeUsuarioDB ){
            return res.status(404).json({
                ok: false,
                msg: 'No existe usuario con ese ID'
            })
        }

        //Eliminar usuario
        await Usuario.findByIdAndDelete( uid );
        
        res.json({
            ok: true,
            msg: 'Usuario eliminado'
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al revisar los datos'
        })
    }

}

module.exports = {
    getUsuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
}