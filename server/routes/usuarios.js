const { Router } = require('express');
const { models } = require('mongoose');

const router = Router();

router.post('/', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Usuario agregado'
    })
});

router.get('/', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Usuario obtenido'
    })
});

router.put('/:id', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Usuario actualizado'
    })
});

router.delete('/:id', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Usuario eliminado'
    })
});

module.exports = router;