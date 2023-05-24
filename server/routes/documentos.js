const { Router } = require('express');
const { check } = require('express-validator');
const {getDocumentos, getDocumentosByID, getMisDocumentos, crearDocumento, editarDocumento, actualizarDocumento, eliminarDocumento} = require('../controllers/documentos');
const { validarCampos } = require('../middlewares/validaciones');
const { validarToken } = require('../middlewares/validarjwt');

const router = Router();

router.get('/', getDocumentos);
router.get('/editar-documentos/:id', getDocumentosByID);
router.get('/mis-documentos/:id', getMisDocumentos);

//Crear documento
router.post('/',
    [
        check('nombre', "El nombre del documento es requerido").not().isEmpty(),
        validarCampos,
        validarToken
    ],
crearDocumento);

//Actualizar documento luego de crear el documento
router.put('/:id',
    [
        check('nombre', "El nombre del documento es requerido").not().isEmpty(),
        validarCampos,
        validarToken
    ],
actualizarDocumento);

//Actualizar documento seleccionado
router.put('/editar-documento/:id', editarDocumento);
router.delete('/:id', eliminarDocumento);

module.exports = router;