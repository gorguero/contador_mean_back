const fs = require('fs');
const Documento = require('../models/documento');

const borrarPDF = (path) => {
    if( fs.existsSync(path) ){
        fs.unlinkSync(path); //Sustituye el PDF
    }
}

const actualizarPDF = async(coleccion, id, fileName) => {
    
    let pathAnterior = '';
    
    switch(coleccion){

        case 'documentos':
            const documento = await Documento.findById(id);

            if( !documento  ){
                return false;
            }

            pathAnterior = `./uploads/documentos/${documento.pdf}`;
            borrarPDF(pathAnterior);

            documento.pdf = fileName;
            await documento.save();

            return true;
        break;

    }

}

module.exports ={
    actualizarPDF
}