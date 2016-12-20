const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow () {
  win = new BrowserWindow({
    width: 400,
    height: 150,
    backgroundColor: '#192633',
    frame: false,
    center: true,
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // win.webContents.openDevTools();

  win.on('close', () => {
    win = null //dereference the window object
  })
}

app.on('ready', () => {
  mainWindow = createWindow()
})

app.on('activate', () => {
  if (win == null) {
    createWindow()
  }
})

app.on('window-all-closed', () => {
  app.quit()
})
