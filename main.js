const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 250,
    frame: false,  // Disables the default frame with title bar and controls
    resizable: false,
    transparent: true,  // Makes the window background transparent
    shadow: true,  // Applies a shadow effect (only on macOS by default)
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');

  // Remove the window menu (optional, depending on your needs)
  win.setMenu(null);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
