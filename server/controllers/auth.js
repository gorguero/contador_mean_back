const {response} = require('express');

const login = async(req, res = response) => {

    try {
        res.json({
            ok: true,
            msg: 'Se ha logueado con éxito'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor comuniquese con el administrador'
        })
    }

}



module.exports = {
    login,
}