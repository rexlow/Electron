const { app, BrowserWindow } = require('electron')

let win
function createWindow () {
  win = new BrowserWindow({ width: 800, height: 600})
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
