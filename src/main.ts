import { app, BrowserWindow, ipcMain, Tray, Menu } from "electron";
import path = require("path");

let tray: Tray;
// Create the browser window.
let mainWindow: BrowserWindow;
const createWindow = () => {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 1080,
    minWidth: 800,
    minHeight: 520,
    backgroundColor: "#282A36",
    frame: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "../app/index.html"));
  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  //任务栏
  tray = new Tray("src/assets/images/logo.ico");

  let trayMenuTemplate: Menu = Menu.buildFromTemplate([
    {
      label: "打开PureListen",
      click: () => {
        mainWindow.show();
      },
    },
    {
      label: "退出",
      click: () => {
        mainWindow.destroy();
        app.quit();
      },
    },
  ]);

  tray.setToolTip("PureListen");
  tray.setContextMenu(trayMenuTemplate);

  //双击重新打开
  tray.on("double-click", () => {
    mainWindow.show();
  });
};

//监听事件
app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("window-min", (event) => {
  mainWindow.minimize();
});

ipcMain.on("window-max", () => {
  if (mainWindow.isMaximized()) {
    mainWindow.restore();
  } else {
    mainWindow.maximize();
  }
});

ipcMain.on("window-close", (event) => {
  event.preventDefault();
  mainWindow.hide();
});
