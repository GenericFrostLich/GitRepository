# New 'n fresh build guide

This document contains updated information on what's required to update the game.

All tools required are free but require a bit of time to set up (1-time process)

## Requirements

 * SCSS (optional) [Download Here](https://sass-lang.com/install)
 * NPM / Node.js (optional) [Download Here](https://www.npmjs.com/get-npm)
 * Tweego [Download Here](https://www.motoslave.net/tweego/)
 
## Building base.js

 * Navigate to /src in your terminal/IDE of choice and run "npm install"
 * Next, in the same folder run "npm run build"
 * That's it, a base.js file should appear in the /game folder now, ready for tweego compile
 
## Compiling the game

Assuming that no css or js files were changed, no SCSS or NPM actions are required, you're free to simply run compile.bat or equivalent.

Mind that resources can be out of date if you don't recompile SCSS and create a new base.js file, and the game might not function correctly.