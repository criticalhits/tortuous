# tortuous

```
(adj.) full of twists and turns.
"The journey through the javascript ecosystem was tortuous"
```
Demos for writing a webpage with ecmascript, using 3rd party modules like p5.js, and bundling your code with webpack.

## getting started

You need to have the npm (node package manager) CLI - this is shipped with NodeJS. See npmjs.com for installation instructions

Setting up the demo:

1. Clone the repo and install dependencies

```bash
$ git clone https://github.com/criticalhits/tortuous.git && cd tortuous
$ npm install
```

Running:

```bash
$ npm run build #or `webpack` if you have webpack globally installed
$ npm run dev # or `lite-server` if you have lite-server globally installed
```




## Application structure:

```
tortuous/
    package.json # Our NPM Package configuration file so you can run $ npm install right away
    package-lock.json # A NPM file that keeps track of changes to the package, don't worry about this
    webpack.config.js # Our Configuration file for Webpack
    index.html # our webpage
    app/
        index.js # Our webpack entry point / JS code. Currently contains an instantiated p5 sketch/es6 demo.
    dist/ # This will be created when you build the project with webpack
        index.bundle.js # Bundled javascript file to include in index.html
```

## Important concepts

### ECMAScript
[ECMAscript](https://en.wikipedia.org/wiki/ECMAScript) is "modern Javascript", but is not fully implemented in web browsers - so writing javascript files using ecmascript syntax will not likely work when you view your webpage. 
Thus, you need to compile your ES code into the javascript that is supported by the browsers.

### Bundling all of your javascriptecmascriptcoffeescripthipsterscript files into a single javascript file with Webpack
[Webpack](webpack.js.org) is a module bundler for Javascript, which allows for a simple workflow:

1. Write your code.
2. Bundle your code. 
    run ```webpack``` in your application directory. Webpack takes care of compilling ECMAScript into native Javascript, so you can write ECMAScript in your plain .js files. 
3. Include your bundled code in the html of your website. 
    ```<script src="dist/bundle.js"></script>```

### Configuring Webpack

You can [learn more about Webpack on their site](https://webpack.js.org/concepts/), but the point of this demo is to jump-start your writing and using modular javascript/ecmascript code with your website. **I've pre-configured Webpack for this demo** and for simplicity's sake, the webpack configuration is just a file letting webpack know where the javascript is and where to output the javascript bundle. Webpack will handle compiling ECMAScript code you write in your .js files to normal javascript during this process.  

**In this tutorial, I've made a minimal webpack config file with a single entry point -- index.js -- telling it to output the bundle to ./dist/index.bundle.js.** This means that when I've built my bundle with webpack, I include it into my html like so:

```html
<html> 
  <body> 

    <script src="dist/index.bundle.js"> 
    </script>
  </body>
</html>
```


###  imports/export statements
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/import


# TODO

Proofread.

Branch out for the other demos (Multiple sketches, UIKit, ...)