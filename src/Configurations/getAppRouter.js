import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import APP_ROUTES from '~/src/Constants/APP_ROUTES'

import MainLayout from '~/src/Layouts/Main.Layout'

const HomePage = React.lazy(() => import('~/src/Pages/Home/Home.Page'))
const NotFoundPage = React.lazy(() => import('~/src/Pages/NotFound/NotFound.Page'))

const getAppRouter = () => createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: APP_ROUTES.HOME.pathname,
        element: <HomePage />
      }
    ]
  },

  {
    path: APP_ROUTES.ANY.pathname,
    element: <NotFoundPage />
  }
])

export default getAppRouter
