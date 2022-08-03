const threads = require('threads')
const fp = require('fastify-plugin')
const { name, version } = require('./package.json')

module.exports = fp(function (fastify, options, next) {
  fastify.decorate('threads', threads)
  next()
}, { fastify: '4.x', name, version })
