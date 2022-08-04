'use strict'

const { test } = require('tap')
const Fastify = require('fastify')
const threads = require('.')

test('hash a string', async (test) => {
  const fastify = Fastify()
  await fastify.register(threads)

  const { spawn, Worker, Thread } = fastify.threads

  const hash = await spawn(new Worker('./examples/hash'))
  const hashedString = await hash('hello from fastify-threads')

  await Thread.terminate(hash)

  test.ok(hashedString)
  test.end()
})
