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

    //Validamos si existe el archivo
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            msg: 'No existe el archivo'
        })
    }

    //Validamos la extension
    const file = req.files.pdf;
    const acortarNombre = file.name.split('.');
    const extensionDelArchivo = acortarNombre[acortarNombre.length - 1];

    const validarExtensiones = ['pdf', 'xml', 'zip', 'rar'];
    
    if(!validarExtensiones.includes(extensionDelArchivo)){
        return res.status(400).json({
            ok: false,
            msg: 'No es una extensión valida, solo pdf, xml, zip o rar'
        });
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