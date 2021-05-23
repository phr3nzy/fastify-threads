'use strict'

const { test } = require('tap')
const Fastify = require('fastify')
const threads = require('.')

test('hash a string', async (test) => {
  const fastify = Fastify()
  await fastify.register(threads)

  const hash = await fastify.threads.spawn(new fastify.threads.Worker('./examples/hash'))
  const hashedString = await hash('hello from fastify-threads')

  test.ok(hashedString)
  test.end()
})
