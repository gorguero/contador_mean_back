const mongoose = require('mongoose');

//Conexión a la base de datos
const dbCONN = async() => {

    try {

        await mongoose.connect( process.env.db_CONN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Se conectó a la base de datos');
        
    } catch (error) {
        console.warn(error);
        process.exit(1); //No permite continuar el proceso
    }

}

module.exports = {
    dbCONN
}