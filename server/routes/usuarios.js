const { Router } = require('express');
const { check } = require('express-validator');
const { getUsuarios, crearUsuario, actualizarUsuario, eliminarUsuario } = require('../controllers/usuarios');
const { validarCampos } = require('../middlewares/validaciones');
const { validarToken } = require('../middlewares/validarjwt');
const router = Router();

router.post('/', 
    [
        check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        check('password','El password es obligatorio').not().isEmpty(),
        validarCampos
    ]
,crearUsuario);

router.get('/', validarToken, getUsuarios);

router.put('/:id',
    [
        validarToken,
        check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').not().isEmail(),
        check('password','El password es obligatorio').not().isEmpty(),
        validarCampos
    ] 
,actualizarUsuario);

router.delete('/:id', validarToken, eliminarUsuario)

module.exports = router;