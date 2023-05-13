const { Router } = require('express');
const { getUsuarios, crearUsuario, actualizarUsuario, eliminarUsuario } = require('../controllers/usuarios');
const router = Router();

router.post('/', crearUsuario);

router.get('/', getUsuarios);

router.put('/:id', actualizarUsuario);

router.delete('/:id', eliminarUsuario)

module.exports = router;