const getMenu = (rol = 'USER_ROL') => {

    const menu = [
        {
            titulo: 'Mi Perfil',
            icono: 'mdi mdi-folder-lock-open',
            url: '/dashboard/perfil'
        },
        {
            titulo: 'Mis Documentos',
            icono: 'mdi mdi-folder-lock-open',
            url: './documentos/mis-documentos/123'
        },
    ];

    if( rol === 'ADMIN_ROL' ){
        menu.unshift( {titulo: 'Usuarios', icono: 'mdi mdi-folder-lock-open', url: '/dashboard/usuarios'} )
        menu.unshift( {titulo: 'Nuevo Documento', icono: 'mdi mdi-folder-lock-open', url: '/dashboard/nuevo-documento'} )
        menu.unshift( {titulo: 'Documentos Generales', icono: 'mdi mdi-folder-lock-open', url: '/dashboard/documentos'} )
    }

    return menu;
}

module.exports = {
    getMenu
}