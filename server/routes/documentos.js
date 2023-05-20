const { Router } = require('express');
const { check } = require('express-validator');
const {getDocumentos, getDocumentosByID, getMisDocumentos, crearDocumento, editarDocumento, actualizarDocumento, eliminarDocumento} = require('../controllers/documentos');
const { validarCampos } = require('../middlewares/validaciones');
const { validarToken } = require('../middlewares/validarjwt');

const router = Router();

router.get('/', getDocumentos);
router.get('/editar-documentos/:id', getDocumentosByID);
router.get('/mis-documentos/:id', getMisDocumentos);
router.post('/', crearDocumento);
router.put('/:id', editarDocumento);
router.put('/editar-documento/:id', actualizarDocumento);
router.delete('/:id', eliminarDocumento);

module.exports = router;