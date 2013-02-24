# Frontend boilerplate

This project is made up from several tools, connected together to provide automated frontend development environment. There are another approaches, such as Yeoman, which are based on very similar tools. However, my goal was to learn to use these libraries and get better understanding of the processes behind Yeoman and advanced toolkits. Once all the different parts are understood, it makes sense to move to using Yeoman or similar project.

## Features
- RequireJS for dependencies management and templates (functions) loading
- Backbone integration, using Zepto and lodash libraries
- on-the-fly compilation of Handlebars HTML templates into javascript functions
- on-the-fly jslinting of javascript files, triggered by file save operation
- Jasmine library for specs suite and continuous testing
- Jasmine-zepto extension for DOM testing

## Libraries used
- RequireJS
- Zepto
- Lodash
- Backbone
- Handlebars
- Jasmine
- Jasmine-zepto

## Requirements
You need to have [node](http://nodejs.org/) and its `npm` installed (`npm` is usually a part of the node package).

For tasks management, [grunt](http://gruntjs.com/) is used, along with its `grunt-cli` tool. Instructions on how to install could be found in [Getting Started](http://gruntjs.com/getting-started) guide.

## Installation
To install all required modules (listed in `package.json`), run

    $ npm install

## Usage
To operate with boilerplate and its tasks, you can use following commands:

- `$ grunt jasmine-generate` to create `spec-runner.html` file for executing Jasmine specs suite.
- `$ grunt jasmine-run` to prepare livereload and start up local server. If you have generated `spec-runner.html`, you can open [http://localhost:9000/spec-runner.html](http://localhost:9000/spec-runner.html) and the specs suite will be automatically run whenever you change any javascript file.
- `$ grunt` is the default task, which handles jslinting and HTML templates compilation into Handlebars functions. These happen on the fly, as you save javascript and html files.

Once the local server is run, it's also possible to access the application at [http://localhost:9000/app/index.html](http://localhost:9000/app/index.html)

## TODO

- on-the-fly SCSS -> CSS
- minification, concatenation
- images compression
- using production versions of libraries
