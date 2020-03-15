## js-tooling

This is a simple repository created while studying the course at egghead called __Modern JavaScript Tooling__.

### Addding webpack

1. initiated a node project with `npm init`
2. installed webpack with `npm install --save-dev webpack webpack-cli`
3. after installing, I created a script under package json to make it easier to build the project with webpack. This allows the command `npm run build -- --mode development`
4. added a simple module and imported it within `index.js` and verified the result at `dist` directory.

### Customising webpack

The idea was to customise webpack with `webpack.config.js`.
This js file is exported using CommonJS NodeJS modules with `module.exports = {...}`
It's possible to notice the usage of `__dirname` which is provided by the function that is created by NodeJS which in turn wraps the module content when it's been requested with `request`. That's how the NodeJS wrapper looks like:

```
(function (exports, require, module, __filename, __dirname, ) {
    your code here...
})
```

more about it can be found in the following links:
- https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/
- https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/

## setting the mode with webpack config

This was as simple as follows which was just adding the property `mode` to webpack config object:
```
module.exports = {
    mode: 'development',
    ...
}
```

### installing babel

Here I started using modern javascript (i.e arrow functions) and used babel to transpile this code to something that browsers will be able to run.

Installing babel `npm i -D @babel/core @babel/cli @babel/preset-env`

Running babel `$(npm bin)/babel ./src/greeting.js --presets=@babel/preset-env`

### adding reactjs

- Added React with `npm i -S react react-dom prop-types`.
- Created an `App.js` with an `App` component declared as a class component and imported it within `index.js`.
- In order to allow babel to understand JSX, I added the preset `@babel/preset-react` with `npm i -D @babel/preset-react`

### injecting react js in the html

added an html template and installed/configured `html-webpack-plugin` 

### injecting css

add css-loader and style-loader with npm for dev purposes
load it within rules such as follows (notice that the order of loaders matters here):
```
{
    test: /\.css$/,
    use: [ 'style-loader', 'css-loader' ],
    exclude: /node_modules/
}
```
then import the css file from within index.js as follows:
```
import './styles.css'
```