export function chooseIconByExtension(name){

    let key;
    let ext = name.split('.');
    
    if(ext.length > 1) {
        key = '.'+ ext[ext.length-1];
    }
    
    else{
        key = 'folder';
    }

    let path;

    switch(key){
        case '.js':
            path = '/ext_icons/javascript.png'
            break;
        
        case 'folder':
            path = '/ext_icons/folder.png'
            break;
            
        case '.jpg':
            path = '/ext_icons/jpg.png'
            break;

        case '.png':
            path = '/ext_icons/png.png'
            break;

        default: 
            path = '/ext_icons/blank-page.png';
    }

    return path;
}