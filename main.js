const {app, BrowserWindow} = require('electron');
const path = require('path');

let mainWindow;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

let ppapi_flash_path;

// Specify flash path.
// On Windows, it might be /path/to/pepflashplayer.dll
// On OS X, /path/to/PepperFlashPlayer.plugin
// On Linux, /path/to/libpepflashplayer.so
if(process.platform  == 'win32'){
  ppapi_flash_path = path.join(__dirname, '\\flash\\player\\pepflashplayer32.dll');
} else if (process.platform == 'linux') {
  ppapi_flash_path = path.join(__dirname, '\\flash\\player\\libpepflashplayer.so');
} else if (process.platform == 'darwin') {
  ppapi_flash_path = path.join(__dirname, '\\flash\\player\\FlashPlayer.plugin');
}

app.commandLine.appendSwitch('ppapi-flash-path', ppapi_flash_path);

// Specify flash version, for example, v18.0.0.203
app.commandLine.appendSwitch('ppapi-flash-version', '32.0.0.192');

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    'width': 1600,
    'height': 900,
    'webPreferences': {'plugins': true}
  });
  mainWindow.maximize()
  mainWindow.loadFile('index.html')
});
