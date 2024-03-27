# Simple Webpack Starter

This repository is designed for cloning into both existing and new projects, providing a quick and effortless setup for SCSS and JS compilation whenever and wherever needed.

## _src directory

Code your SCSS and JS within the `_src` directory. The primary entry points are configured within the `webpack.config.js` file, allowing you to modify, add, or rename them according to your requirements.

## dist directory

Compiled scripts and styles will be output to a `dist` directory. This does not exist until you've executed either `npm run watch` or `npm run build` command.

## But first..

Ensure that once you clone this repository, it is no longer under version control.
1. Navigate into this directory with `cd`
2. Check if `.git` directory exists in this root directory. Execute `ls -la` and see if it's there. If so, do #2.
3. Remove the `.git` directory. Execute `rm -fdr .git/`.

## Getting started

1. Execute the command `npm install` to install dependencies and establish the `node_modules` directory.
2. Add your scripts and styles. Execute the `npm run watch` command to perform ongoing compilation whenever you save.
3. Ready scripts and styles for production by executing the `npm run build` command.

## Node version issues

Using the right node version is necessary. Currently, this is tested with 14.17.0. If your dev environment runs an earlier version and you don't have `nvm` running, you'll need to install it. Kinsta might require you to reach out to support to install this. It is already installed on D20.

### Install node version manager

1. Install `nvm`, run `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`
2. Verify it worked (output will be "nvm"). Execute `command -v nvm`

### Install and use the latest version of node with nvm

1. Install latest version with `nvm install --lts`
2. See what the latest version is `nvm list available`
3. Tell your project to use the latest with `nvm use <the latest version number`

For all the `nvm` documentation: https://github.com/nvm-sh/nvm

