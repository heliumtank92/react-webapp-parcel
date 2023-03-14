import { Parcel } from '@parcel/core'
import { fileURLToPath } from 'url'

const bundler = new Parcel({
  entries: 'public/index.ejs',
  defaultConfig: '@parcel/config-default',
  mode: 'development',
  defaultTargetOptions: {
    engines: {
      browserslist: ['last 3 versions']
    }
  },
  env: {
    NODE_ENV: 'development',
    BABEL_ENV: 'development'
  },
  additionalReporters: [
    {
      packageName: '@parcel/reporter-cli',
      resolveFrom: fileURLToPath(import.meta.url)
    }
  ],
  serveOptions: {
    port: 3000
  },
  hmrOptions: {
    port: 3000
  }
})

await bundler.watch((error, buildEvent) => {
  if (error) { process.exit(1) }
})
