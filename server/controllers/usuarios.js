const getUsuarios = (req, res) => {
    return res.json({
        ok: true,
        msg: 'Usuario obtenido'
    })
}

const crearUsuario = (req, res) => {
    return res.json({
        ok: true,
        msg: 'Usuario agregado'
    })
}

const actualizarUsuario = (req, res) => {
    return res.json({
        ok: true,
        msg: 'Usuario editao'
    })
}

const eliminarUsuario = (req, res) => {
    return res.json({
        ok: true,
        msg: 'Usuario eliminao'
    })
}

module.exports = {
    getUsuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
}