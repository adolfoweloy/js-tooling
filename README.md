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
