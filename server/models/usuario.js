const {Schema, model} = require('moongose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    password2: {
        type: String
    },
    pdf: {
        type: String
    },
    curp: {
        type: String,
        default: ''
    },
    telefono: {
        type: String,
        default: ''
    },
    rol: {
        type: String,
        require: true,
        default: 'USER_ROL'
    }
});


module.exports = model('Usuario', UsuarioSchema);