const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

let win;

var APP_DIR = '/src/';
var ICO_DIR = '/ico/';


function createWindow() {
    win = new BrowserWindow({
        width: 1248,
        height: 800,
        icon: path.join(__dirname, ICO_DIR, 'ico.ico'),
        title: 'Papeleria Fantino, SRL'
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, APP_DIR, 'app/app.html'),
        protocol: 'file:',
        slashes: true
    }))

    win.removeMenu();

    // win.maximize();

    // win.webContents.openDevTools();
}

app.on('ready', createWindow);
