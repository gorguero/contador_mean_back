const {response} = require('express');
const Documento = require('../models/documento');

//Obtenemos los documentos
const getDocumentos = async(req, res=response) => {
    
    try {
        const documentos = await Documento.find().populate('usuario', 'nombre fecha pdf');

        res.json({
            ok: true,
            documentos
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error al obtener los documentos'
        }); 
    }

}

//Obtenemos los documentos por ID
const getDocumentosByID = async(req, res=response) => {
    
    const id = req.params.id;

    try {
        
        const documentos = await Documento.findById(id).populate('usuario', 'nombre fecha pdf');

        res.json({
            ok: true,
            documentos
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Erro al obtener el documento por ese ID'
        })
    }

}

const getMisDocumentos = async(req, res=response) => {
    res.json({
        ok: true,
        msg: 'Obteniendo mis documentos'
    })
}

//Crear documento
const crearDocumento = async(req, res=response) => {
    
    const uid = req.uid;

    const documento = new Documento({
        usuario: uid,
        ...req.body
    });

    console.log(documento)

    try {
        //Salvando documento en la bd
        const documentoDB = await documento.save();

        res.json({
            ok: true,
            documento: documentoDB
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error al crear un documento'
        });
    }

}

//Actualizar documento seleccionado
const editarDocumento = async(req, res=response) => {

    const id = req.params.id;
    const uid = req.uid;
    
    try {

        const documento = await Documento.findById( id );

        if(!documento){
            return res.status(404).json({
                ok: false,
                msg: 'Documento no encontrado'
            });
        }

        const cambiosEnDocumento = {
            ...req.body,
            usuario: uid
        }

        const documentoActualizado = await Documento.findByIdAndUpdate(id, cambiosEnDocumento, {new: true});

        res.json({
            ok: true,
            usuario: documentoActualizado
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error al editar el documento'
        });
    }

}

//Actualizar documento luego de crear el documento
const actualizarDocumento = async(req, res=response) => {

    const id = req.params.id;
    const uid = req.uid;

    try {

        const documento = await Documento.findById( id );

        if( !documento ){
            return res.status(404).json({
                ok: false,
                msg: 'Documento no encontrado'
            });
        }

        //Actualizar el nombre
        const cambiosDelDocumento = {
            ...req.body,
            usuario: uid
        }
        const documentoActualizado = await Documento.findByIdAndUpdate(id, cambiosDelDocumento, { new: true });

        res.json({
            ok: true,
            documento: documentoActualizado
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error al actualizar el documento'
        });       
    }
}

//Eliminar documento
const eliminarDocumento = async(req, res=response) => {
    
    const uid = req.params.id;

    try {

        const existeDocumentoDB = await Documento.findById( uid );

        if(!existeDocumentoDB){
            return res.status(404).json({
                ok: false,
                msg: 'Documento no encontrado'
            });
        }

        //Eliminación del documento
        await Documento.findByIdAndDelete( uid );

        res.json({
            ok: true,
            documento: 'Documento elimnado correctamente'
        })
        
    } catch (error) {
        res.status(500).json({
            ok: true,
            msg: 'Hubo un error al eliminar el documento'
        })
    }

}

module.exports = {
    getDocumentos,
    getDocumentosByID,
    getMisDocumentos,
    crearDocumento,
    editarDocumento,
    actualizarDocumento,
    eliminarDocumento
}