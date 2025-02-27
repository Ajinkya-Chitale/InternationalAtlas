import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './UI/Layout/Layout'
import Home from './UI/pages/Home'
import About from './UI/pages/About'
import Country from './UI/pages/Country'
import Contact from './UI/pages/Contact'
import NotFound from './UI/pages/NotFound'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,

      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/country',
          element: <Country />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
