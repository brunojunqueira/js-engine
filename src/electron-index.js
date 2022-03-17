const {app, BrowserWindow, ipcMain, dialog} = require('electron');
const isDev = require("electron-is-dev");
const path = require('path');
const fs = require('fs');

let mainWindow;

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
        },
        backgroundColor: '#191919'
    })

    mainWindow.loadURL(
        isDev
        ? "http://localhost:3000"
        : `file://${path.join(__dirname, "../build/index.html")}`
    );
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
        let result = await dialog.showOpenDialog(mainWindow, {properties: ['openDirectory']});
        let dir = result.filePaths[0];
        return dir;
    });
    ipcMain.on( 'createScene', ( e, args ) =>{
        let to = args[0];
        let name = args[1].name;
        let scene = JSON.stringify(args[1]);

        if(!fs.existsSync(to)){
            fs.mkdirSync(to, (e)=>{
                console.log(e)
            });
        }
        else{
            if(fs.existsSync(`${to}\\${args[1].name}.scn`)){
                name += fs.readdirSync(to).length;
            }
        }

        fs.writeFile(`${to}\\${name}.scn`, scene, function(err) {
            if (err) {
                console.log(err);
            }
        });
    });
}

app.on('ready', createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});