const {response} = require('express');
const Usuario = require('../models/usuario');
const Documento = require('../models/documento');

const getBuscar = async(req, res=response) => {

    res.json({
        ok: true,
        msg: 'ok en buscar'
    })

}

const getDocumentos = async(req, res=response) => {

    res.json({
        ok: true,
        msg: 'ok en buscar documentos'
    })

}

module.exports = {
    getBuscar,
    getDocumentos
}
