var electron = require('electron')
electron.app.on('ready', function() {
    var mainWindow = new electron.BrowserWindow({width: 600, height: 800})
    mainWindow.loadURL('C:/Users/Owner/Documents/VSCode Projects/node-workshops/elementary-electron/index.html')
})