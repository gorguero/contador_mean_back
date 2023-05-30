const { Router } = require('express');
const {validarToken} = require('../middlewares/validarjwt');
const {fileUpload, retornarPDF} = require('../controllers/upload');

const router = new Router();

router.put('/:coleccion/:id', validarToken, fileUpload);

router.get('/:coleccion/:pdf', retornarPDF);

module.exports = router;