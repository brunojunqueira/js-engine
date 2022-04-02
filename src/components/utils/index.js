export function chooseIconByExtension(extension){

    switch(extension){
        case 'folder':
            return '/ext_icons/folder.png';
        case '.js':
            return '/ext_icons/javascript.png';
        case '.jpg':
            return '/ext_icons/jpg.png';
        case '.png':
            return '/ext_icons/png.png';
        default: 
            return '/ext_icons/blank-page.png';
    }
}