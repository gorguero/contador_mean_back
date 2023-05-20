const {response} = require('express');
const Documento = require('../models/documento');

const getDocumentos = async(req, res=response) => {
    res.json({
        ok: true,
        msg: 'Obteniendo documentos'
    })
}

const getDocumentosByID = async(req, res=response) => {
    res.json({
        ok: true,
        msg: 'Obteniendo documento por ID'
    })
}

const getMisDocumentos = async(req, res=response) => {
    res.json({
        ok: true,
        msg: 'Obteniendo mis documentos'
    })
}

const crearDocumento = async(req, res=response) => {
    res.json({
        ok: true,
        msg: 'Crear documento'
    })
}

const editarDocumento = async(req, res=response) => {
    res.json({
        ok: true,
        msg: 'Editar documento'
    })
}

const actualizarDocumento = async(req, res=response) => {
    res.json({
        ok: true,
        msg: 'Actualizando documento'
    })
}

const eliminarDocumento = async(req, res=response) => {
    res.json({
        ok: true,
        msg: 'Eliminar documento'
    })
}

module.exports = {
    getDocumentos,
    getDocumentosByID,
    getMisDocumentos,
    crearDocumento,
    editarDocumento,
    actualizarDocumento,
    eliminarDocumento
}