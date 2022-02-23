const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    minimizeApp: () => ipcRenderer.send('minimizeApp'),
    toggleMaximizeApp: (isMaximized) => {
        (isMaximized) ?
            ipcRenderer.send('maximizeApp')
            :
            ipcRenderer.send('unmaximizeApp')
    },
    closeApp: () => ipcRenderer.send('closeApp')
})