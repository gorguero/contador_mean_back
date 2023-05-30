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

    const tabla = req.params.tabla;
    const buscar = req.params.buscar;
    const regExp = new RegExp(buscar, 'i');

    let data = [];

    switch(tabla){
        
        case 'documentos':
            data = await Documento.find({nombre: regExp});
        break;

        case 'usuarios':
            data = await Usuario.find({nombre: regExp});
        break;

        default:
            return res.status(400).json({
                ok: true,
                msg: 'La tabla debe ser de documentos o usuarios'
            });
    }

    res.json({
        ok: true,
        resultado: data
    });

}

module.exports = {
    getBuscar,
    getDocumentos
}
