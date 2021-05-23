const { expose } = require('threads')
const crypto = require('crypto')

expose(async function hash (payload) {
  const salt = crypto.randomBytes(32).toString('hex')

  return new Promise(function (resolve, reject) {
    crypto.pbkdf2(payload, salt, 4, 64, 'sha512', function (error, key) {
      if (error) {
        reject(error)
      } else {
        resolve(key.toString('utf-8'))
      }
    })
  })
})
