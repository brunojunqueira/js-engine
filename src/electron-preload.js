const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('eAPI', {
    minimizeApp: () => ipcRenderer.send('minimizeApp'),
    toggleMaximizeApp: (isMaximized) => {
        (isMaximized) ?
            ipcRenderer.send('maximizeApp')
            :
            ipcRenderer.send('unmaximizeApp')
    },
    closeApp: () => ipcRenderer.send('closeApp'),
    selectDirectory: async () => { 
        let dir = await ipcRenderer.invoke('selectDirectory');
        return dir;
    },
    createScene: (path, scene) => ipcRenderer.send('createScene', [path, scene]),
    saveProject: (config, path) => ipcRenderer.send('saveProject', [config, path]),
    openProject: async (path) => { 
       let config = await ipcRenderer.invoke('openProject', [path]);
       return config;
    },
    getDirContent: async (path) => {
        let dirContent = await ipcRenderer.invoke('getDirContent', [path]);

        return dirContent;
    },
    executeOnPrompt: async (command) => {
        let output = await ipcRenderer.invoke('executeOnPrompt', [command]);
        return output;
    }
});