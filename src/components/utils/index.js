export function chooseIconByExtension(extension){

    switch(extension){
        case 'folder':
            return '/ext_icons/folder.png';
        case '.config':
            return '/ext_icons/config.png';
        case '.scn':
            return '/ext_icons/scn.png';
        case '.js':
            return '/ext_icons/js.png';
        case '.ts':
            return '/ext_icons/ts.png';
        case '.jpg':
            return '/ext_icons/jpg.png';
        case '.jpeg':
            return '/ext_icons/jpeg.png';
        case '.png':
            return '/ext_icons/png.png';
        default: 
            return '/ext_icons/blank-page.png';
    }
}