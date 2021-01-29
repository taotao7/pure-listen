import { app, BrowserWindow } from "electron";
import * as path from "path";

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
    },
    width: 1080,
  });
  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "../app/index.html"));
  // Open the DevTools.
  mainWindow.webContents.openDevTools();
}

app.on("ready", () => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
