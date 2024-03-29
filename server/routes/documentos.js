const { Router } = require('express');
const { check } = require('express-validator');
const {getDocumentos, getDocumentosByID, getMisDocumentos, crearDocumento, editarDocumento, actualizarDocumento, eliminarDocumento} = require('../controllers/documentos');
const { validarCampos } = require('../middlewares/validaciones');
const { validarToken } = require('../middlewares/validarjwt');

const router = Router();

//Obtener documento
router.get('/', getDocumentos);

//Obtener documento por ID
router.get('/editar-documentos/:id', getDocumentosByID);

//Obtener documentos del usuario
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
router.put('/editar-documento/:id',
    [
        check('nombre', "El nombre del documento es requerido").not().isEmpty(),
        validarCampos,
        validarToken
    ],
editarDocumento);

//Eliminar documento
router.delete('/:id', eliminarDocumento);

module.exports = router;