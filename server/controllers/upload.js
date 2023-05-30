const {response} = require('express');

const fileUpload = (req, res=response) => {

    const coleccion = req.params.coleccion;
    const id = req.params.id;

    const validarColeccion = ['documentos', 'usuarios'];

    //validamos la coleccion
    if( !validarColeccion.includes(coleccion) ){
        return res.status(400).json({
            ok: false,
            msg: 'No existe la coleccion'
        })
    }

    res.json({
        ok: true,
        msg: 'Subiendo archivo'
    })
}

const retornarPDF = (req, res=response) => {
    res.json({
        ok: true,
        msg: 'Retornando archivo'
    })
}

module.exports = {
    fileUpload,
    retornarPDF
}