const { contextBridge, ipcRenderer, ipcMain } = require('electron')

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
        const dir = await ipcRenderer.invoke('selectDirectory');
        return dir;
    }
});