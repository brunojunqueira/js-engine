const {app, BrowserWindow, ipcMain, dialog, ipcRenderer} = require('electron');

const path = require('path');

app.on('ready', createWindow);

function createWindow() {

    mainWindow = new BrowserWindow({
        simpleFullscreen: true,
        titleBarStyle: 'hidden',
        frame: false,
        minWidth: 365,        
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    mainWindow.loadURL('http://localhost:3000');
    mainWindow.maximize();
    mainWindow.webContents.openDevTools();

    ipcMain.on('minimizeApp', () =>{
        mainWindow.minimize();
    });
    ipcMain.on('maximizeApp', () =>{
        mainWindow.maximize();
    });
    ipcMain.on('unmaximizeApp', ()=>{
        mainWindow.unmaximize();

    });
    ipcMain.on('closeApp', () => {
        mainWindow = null;
        app.quit();
    });
    ipcMain.handle('selectDirectory', async () =>{
        let dir = await dialog.showOpenDialog(mainWindow, {properties: ['openDirectory']});
        return dir;
    });
}