import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import APP_ROUTES from '~/src/Constants/APP_ROUTES'

const MainLayout = React.lazy(
  () => import(
    /* webpackChunkName: "MainLayout" */
    /* webpackMode: "lazy" */
    /* webpackPreload: true */
    '~/src/Layouts/Main.Layout'
  )
)

const Page404Page = React.lazy(
  () => import(
    /* webpackChunkName: "Page404Page" */
    /* webpackMode: "lazy" */
    /* webpackPreload: true */
    '~/src/Pages/Page404/Page404.Container'
  )
)

const HomePage = React.lazy(
  () => import(
    /* webpackChunkName: "HomePage" */
    /* webpackMode: "lazy" */
    /* webpackPreload: true */
    '~/src/Pages/Home/Home.Container'
  )
)

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
    element: <Page404Page />
  }
])

export default getAppRouter
