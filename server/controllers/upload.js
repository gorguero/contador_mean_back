const {response} = require('express');

const fileUpload = (req, res=response) => {
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