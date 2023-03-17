import React, { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import './service-worker'

const App = lazy(() => import('./App'))

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>
)
