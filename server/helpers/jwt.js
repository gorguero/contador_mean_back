const jwt = require('jsonwebtoken');
// const secretPrivateKey = 'PR0YECTW3B';

const crearToken = ( uid ) => {

    return new Promise( (resolve, reject) => {

        const payload = {
            uid
        };

        jwt.sign( payload, process.env.secretPrivateKey, {
            expiresIn: '12h'
        }, (err, token) => {
            if( err ){
                console.log(err);
                reject(err);
            }else{
                resolve(token);
            }
        });

    });

}


module.exports = {
    crearToken
}