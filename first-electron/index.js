const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const url = require('url')
const tray = require('./tray')

let win

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#FFF'
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.on('close', () => {
    win = null //dereference the window object
  })
}

app.on('ready', () => {
  mainWindow = createWindow()
  tray.create(mainWindow)
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win == null) {
    createWindow()
  }
})

app.on('window-all-closed', () => {
  app.quit()
})
