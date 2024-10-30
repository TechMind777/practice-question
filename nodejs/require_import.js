/*
In JavaScript (and Node.js), both require and import are used to load and manage modules, but they have significant differences, mainly in how they work, where they're used, and their behavior. Let's break down the differences:

1. Module System
    -require is part of the CommonJS module system.
    -import is part of the ES6 (ECMAScript 2015) module system.
2. Usage Context
    require:
        -Primarily used in Node.js (CommonJS module system).
        -Works synchronously, meaning modules are loaded at runtime.
        -Typically used in older JavaScript environments or before ES6.

    javascript
        const fs = require('fs'); // Loading the file system module in Node.js

    import:

        -art of the ES6 module system, which is used in modern JavaScript (especially in frontend frameworks like React, Angular, etc.).
        -orks asynchronously, meaning modules are loaded at compile-time (before execution).
        -ypically used in browsers, modern Node.js (with "type": "module" in package.json), and build tools like Webpack, Babel, etc.
    
    javascript
    
        import fs from 'fs'; // ES6 module syntax


3. Syntax Differences
    require:

        -Can be used anywhere in the code (dynamic).
        -Syntax is more flexible.

    Example:
        const math = require('./math');
        const result = math.add(1, 2);

    import:

        -Must be placed at the top of the file (static).
        -Syntax is more structured and strict.

    Example:
        import { add } from './math';
        const result = add(1, 2);


4. Exporting Modules

    CommonJS (with require):

        You export modules using module.exports or exports.

        javascript
            // Exporting using CommonJS
            module.exports = {
                add: (a, b) => a + b,
                subtract: (a, b) => a - b
            };

    ES6 (with import):
        You export using export or export default.

        javascript

            // Named exports
            export const add = (a, b) => a + b;

            // Default export
            export default (a, b) => a + b;


5. Dynamic Imports
    require:

    Supports dynamic imports natively, so you can conditionally load modules.

    javascript
    Copy code
    if (condition) {
    const moduleA = require('./moduleA');
    }
    import:

    ES6 also supports dynamic imports, but with a special syntax (returns a promise).

    javascript
    Copy code
    if (condition) {
    import('./moduleA').then(moduleA => {
        // Use moduleA
    });
    }
6. Synchronous vs. Asynchronous
require:

Synchronous: require loads modules synchronously, meaning the module is available as soon as require is called.

javascript
Copy code
const module = require('./module'); // Loaded synchronously
import:

Asynchronous: import is more modern and works asynchronously. This is especially useful when loading large modules or splitting code.

javascript
Copy code
import('./module').then(module => {
  // Loaded asynchronously
});
7. Browser Support
require:

Not natively supported in browsers. You need bundlers like Webpack or tools like Browserify to use require in the browser.
import:

Natively supported in modern browsers. No need for additional tools, but you can still use bundlers to optimize.
8. Top-Level await (ESM Specific)
require:

You can't use await directly at the top level in CommonJS.
import:

In ES modules, you can use top-level await for async operations.

javascript
Copy code
const data = await fetchData();
9. Hoisting
require:

require is not hoisted, meaning the module is loaded when the require statement is executed.
import:

import is hoisted, meaning it's moved to the top of the file during compile-time.

Summary Table:

Feature	            require (CommonJS)	            import (ES6 Modules)
Module System	    CommonJS	                    ES6 Modules
Execution Context	Synchronous	                    Asynchronous
Used in	            Node.js	                        Modern JavaScript (Browser/Node.js with ESM)
Dynamic Imports	    Yes (native)	                Yes (with import())
Export Syntax	    module.exports or exports	    export, export default
Placement	        Can be used anywhere	        Must be at the top of the file
Hoisting	        No	                            Yes
Browser Support	    Not natively supported	        Supported in modern browsers
Top-Level await	    No	                            Yes (in ESM modules)



When to Use require vs import:
    Use require when you're working with older versions of Node.js or JavaScript that doesn't support ES6 modules.
    Use import when you're using modern JavaScript/TypeScript, especially in frontend code, or in modern Node.js environments with ESM support.

    
    */