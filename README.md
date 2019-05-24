# Steve's Offline Flash Games
Offline Flash Games that can work offline and never be blocked, for use during those boring times at school or work but also useful for times where there is no internet.
View the [Online Demo](https://steve-tech.github.io/Offline-Flash-Games/index.html).
## Games
 - Chess 3
 - Minicraft
 - Nyan Cat - Lost in Space
 - PAC-MAN
 - Duck Life 1, 2, 3 & 4
 - Earn to Die 1, 2, 2012 & 2012 Part 2
 - Run 1, 2 & 3
 - Fireboy and Watergirl in The Crystal Temple, Forest Temple, Ice Temple & Light Temple (These haven't been tested properly yet)

## Download
View the [releases here](https://github.com/Steve-Tech/Offline-Flash-Games/releases).
There is no mac version because I don't have a mac so I can't test or get the file needed to compile, you will have to run the HTML version or compile Electron for yourself, feel free to fork this and make a mac version.
## Compiling
1. Install Node.js, electron and electron-packager
 - [Download Node.js here](https://nodejs.org/en/)
 - Open command prompt in the directory of the repository and run `npm install electron --save-dev`
 - In the same command prompt run `npm install electron-packager --save-dev`
2. You will need to find the Pepper Flash Player files
 - Windows 64 bit: `C:\Windows\System32\Macromed\Flash\pepflashplayer64_<version>.dll`
 - Windows 32 bit: `C:\Windows\SysWOW64\Macromed\Flash\pepflashplayer32_<version>.dll`
 - Mac: `/Library/Internet Plug-Ins/Flash Player.plugin`
3. Put them in the `flash\player` directory

4. ```electron-packager . offline-flash-games --overwrite --platform=win32 --arch=ia32 --prune=true --out=release-builds --version-string.FileDescription="Steve's Offline Collection of Flash Player Games" --version-string.ProductName="Steve's Offline Flash Games"```
    
Notes:
 - ASAR does not work with Flash
 - You may want to go into `main.js` to find `'\\flash\\pepflashplayer32.dll'` and change the 32 to 64 if using different versions of electron