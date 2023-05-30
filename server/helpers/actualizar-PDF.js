const fs = require('fs');

const borrarPDF = (path) => {
    if( fs.existsSync(path) ){
        fs.unlinkSync(path);
    }
}

const actualizarPDF = () => {
    console.log('estoy actualizando el pdf')
}

module.exports ={
    actualizarPDF
}