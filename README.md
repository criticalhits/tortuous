# tortuous
full of twists and turns.

## getting started

You need to have the npm (node package manager) CLI - this is shipped with NodeJS. See npmjs.com for installation instructions

To run the demo:
```bash
git clone https://github.com/criticalhits/tortuous.git && cd tortuous
npm install
npm run dev
```

## Important concepts

### ECMAScript -> Javascript
ECMAscript  is the official Javascript standard - but - is not fully implemented in browsers. Thus, you need to compile the ecmascript you rwite into javascript that is.

### Bundling with Webpack
Webpack is a module bundler for Javascript, which allows for a simple workflow of:

1. Write your code.

2. Bundle your code. 
    run ```webpack``` in your application directory. Webpack takes care of compilling ECMAScript into native Javascript, so you can write ECMAScript in your plain .js files. 

3. Include your bundle in the html 
    ```<script src="dist/bundle.js"></script>```

### Configuring Webpack

You can learn more about Webpack, and read documentation/tutorials/etc. here: https://webpack.js.org/concepts/ 
However, to simplify it as much as possible, configuring webpack involves creating a webpack.config.js file, wherein we tell webpack where to look for our javascript files, and where to output the bundle.

### imports/export statements
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/import
