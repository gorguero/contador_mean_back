const { Router } = require('express');
const { check } = require('express-validator');
const { getUsuarios, crearUsuario, actualizarUsuario, eliminarUsuario } = require('../controllers/usuarios');
const { validarCampos } = require('../middlewares/validaciones');
const router = Router();

router.post('/', 
    [
        check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').not().isEmpty(),
        check('password','El password es obligatorio').not().isEmpty(),
        validarCampos
    ]
,crearUsuario);

router.get('/', getUsuarios);

router.put('/:id',
    [
        check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').not().isEmpty(),
        check('password','El password es obligatorio').not().isEmpty(),
        validarCampos
    ] 
,actualizarUsuario);

router.delete('/:id', eliminarUsuario)

module.exports = router;