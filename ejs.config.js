require('dotenv').config()

const envKeys = Object.keys(process.env)
const filteredEnvKeys = envKeys.filter(key => /^APP_ENV_/i.test(key))

const envConfig = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  BABEL_ENV: process.env.BABEL_ENV || 'development'
}
filteredEnvKeys.forEach(key => { envConfig[key] = process.env[key] })
const config = { locals: envConfig }

module.exports = config
