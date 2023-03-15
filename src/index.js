import React, { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

const App = lazy(() => import('./App'))
// import App from './App'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>
)
