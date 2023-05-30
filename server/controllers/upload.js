const {response} = require('express');
const {v4: uuidv4} = require('uuid');

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
    const shortName = file.name.split('.');
    const extensionFile = shortName[shortName.length - 1];

    const validarExtensiones = ['pdf', 'xml', 'zip', 'rar'];
    
    if(!validarExtensiones.includes(extensionFile)){
        return res.status(400).json({
            ok: false,
            msg: 'No es una extensión valida, solo pdf, xml, zip o rar'
        });
    }

    //Generando un identificador
    const fileName = `${uuidv4()}.${extensionFile}`;

    res.json({
        ok: true,
        msg: 'Subiendo archivo',
        nombreArchivo: fileName
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