const { Router } = require('express');
const router = Router();

router.post('/', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Usuario agregado'
    })
})

router.get('/', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Usuario obtenido'
    })
})

router.put('/:id', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Usuario editao'
    })
})

router.delete('/:id', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Usuario eliminao'
    })
})

module.exports = router;