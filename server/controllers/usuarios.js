// Controlers -> Son las acciones que podremos hacer para trabajar con nuestra api rest

const getUsuarios = (req, res) => {

    return res.json({
        ok: true,
        msg: 'Usuario obtenido'
    });
}

const crearUsuario = (req, res) => {

    console.log(req.body)

    return res.json({
        ok: true,
        msg: 'Usuario creado'
    });
}

const actualizarUsuario = (req, res) => {

    return res.json({
        ok: true,
        msg: 'Usuario actualizado'
    });
}

const eliminarUsuario = (req, res) => {

    return res.json({
        ok: true,
        msg: 'Usuario eliminado'
    });
}

module.exports = {
    getUsuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
}