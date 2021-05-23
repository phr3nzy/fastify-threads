# fastify-threads

[![NPM version](https://img.shields.io/npm/v/fastify-threads)](https://www.npmjs.com/package/fastify-threads)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

A Fastify plugin that exposes [threads.js](https://github.com/andywer/threads.js) functionality

## Install

```bash
$ npm install fastify-threads
# install using npm

$ yarn add fastify-threads
# install using yarn
```

## Usage

Using is as simple as requiring and registering it:

```javascript
const fastify = require("fastify");
const threads = require("fastify-threads");

const app = fastify();

app.register(threads);
```

Now you have access to all [threads.js](https://github.com/andywer/threads.js) functions.
