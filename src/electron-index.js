const {app, BrowserWindow, ipcMain, dialog} = require('electron');
const isDev = require("electron-is-dev");
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
const { default: axios } = require('axios');

let mainWindow;


async function createWindow() {

    const mainWindow = new BrowserWindow({
        titleBarStyle: 'hidden',
        frame: false,
        minWidth: 800,        
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'electron-preload.js')
        },
        backgroundColor: '#191919'
    })
    
    mainWindow.loadURL(path.join(__dirname, 'electron-loadscreen.html'));

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
            fs.mkdirSync(to, {recursive: true});
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
    ipcMain.on('saveProject', (e, args) => {
        let config = JSON.stringify(args[0]);
        let path = args[1];
        fs.writeFileSync(`${path}\\project.config`, config, {flag:'w'});

    });
    ipcMain.handle('openProject', (e, args) =>{
        let path = args[0];
        let result = fs.readFileSync(`${path}\\project.config`);
        if(result != 'undefined\\project.config'){
            let data = JSON.parse(result.toString());
            return data;
        }
        else{
            return null;
        }
    })
    ipcMain.handle('getDirContent', (e, args) =>{
        const path = args[0];

        const dirContent = fs.readdirSync(path, {withFileTypes: true});
        return dirContent;

    })
    ipcMain.handle('executeOnPrompt', (e, args) => {
        let command = args[0];
        const output = execSync(command, { encoding: 'utf-8' });
        return output;
    })
    
    //#region Dev Connection Try
    let found = false;
    let wait = setInterval(async () => {
        let {status} = await axios.get('http://localhost:3000');
        if(status === 200 && !found){
            mainWindow.loadURL(
                isDev
                ? "http://localhost:3000"
                : `file://${path.join(__dirname, "../build/index.html")}`
            );
            mainWindow.maximize();
            clearInterval(wait);
            found = true;
        }
    }, 2000);

    setTimeout(()=>{(!found) && clearInterval(wait);}, 60000);

    //#endregion

    mainWindow.webContents.openDevTools();
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

