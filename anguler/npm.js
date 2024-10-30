/**
 * 10. If there is a package(or say library) that is not available through NPM , then how would you use it in your angular application ?
For anything that doesn’t have an npm package, you’ll have to download the file and put it somewhere in your project — I’d recommend putting it in a directory called vendor or lib. The import statement can use a relative path to the module you want to use, so it should be straightforward, e.g. if you put your third-party module in vendor/some-lib.js, you would import it with:
Code e.g
 // src/foo.js
import './../vendor/some-lib';
If you want to get fancy, you can use resolve.alias in your webpack config so that you never have to work out the relative path.

// webpack.config.js
const path = require('path');

// ...
resolve: {
  alias: {
    vendor: path.resolve(__dirname, 'vendor')
  }
},

// src/foo.js
import 'vendor/some-lib';
 */