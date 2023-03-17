import React, { lazy } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react'

import AppStore, { PersistedAppStore } from '~/src/Configurations/AppStore'

import './service-worker'

const App = lazy(() => import('./App'))

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={AppStore}>
      <PersistGate
        persistor={PersistedAppStore}
        onBeforeLift={() => ({})}
      >
        {(persisted) => <App persisted={persisted} />}
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
