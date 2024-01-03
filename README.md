# Simple Webpack Starter

This only has TWO files to start with. It supplies the bare essentials for compiling/transpiling SCSS and JS.
* package.json holds the basic package information
* webpack.config.js holds the generic loader data

**NOTE:** Don't forget to add yarn.lock and node_modules to .gitignore if using version control!!!

Steps to begin the magic!
1. cd into this folder (_src)
2. run `yarn`
4. Add some SCSS in _src/scss/main.scss, and some JS is _src/js/main.js
5. From the _src directory, run `yarn build` or `npm run build` to send output to an assets directory that is a sibling of the _src directory

**NOTE:** You can also use `yarn start` or `npm run start` to work on the project in dev mode and watch changes.
