const {response} = require('express');
const Usuario = require('../models/usuario');
const Documento = require('../models/documento');

const getBuscar = async(req, res=response) => {

    const searchParam = req.params.buscar;
    const regExp = new RegExp(searchParam, 'i');

    const [usuarios, documentos] = await Promise.all([
        Usuario.find({nombre: regExp}),
        Documento.find({nombre: regExp})
    ]);

    res.json({
        ok: true,
        msg: 'ok en buscar',
        usuarios,
        searchParam,
        documentos
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
