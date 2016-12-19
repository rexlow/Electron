const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let win
function createWindow () {
  win = new BrowserWindow({ width: 800, height: 600})
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
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  createWindow()
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win == null) {
    createWindow()
  }
})
