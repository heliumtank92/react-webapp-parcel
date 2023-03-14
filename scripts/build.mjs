import { Parcel } from '@parcel/core'
import { fileURLToPath } from 'url'

const bundler = new Parcel({
  entries: 'public/index.ejs',
  defaultConfig: '@parcel/config-default',
  mode: 'production',
  defaultTargetOptions: {
    engines: {
      browsers: ['>0.5%', 'last 2 version', 'not dead']
    }
  },
  additionalReporters: [
    {
      packageName: '@parcel/reporter-cli',
      resolveFrom: fileURLToPath(import.meta.url)
    }
  ]
})

try {
  await bundler.run()
} catch (err) {
  console.log(err.diagnostics)
}
