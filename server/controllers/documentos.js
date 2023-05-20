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
    
    const uid = req.uid;

    const documento = new Documento({
        usuario: uid,
        ...req.body
    });

    console.log(documento)

    try {
        

        res.json({
            ok: true,
            documento
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error al crear un documento'
        });
    }

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