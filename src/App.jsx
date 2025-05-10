import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';
import Browse from './components/Browse';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },

  ])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
