import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './UI/Layout/Layout'
import Home from './UI/pages/Home'
import About from './UI/pages/About'
import Country from './UI/pages/Country'
import Contact from './UI/pages/Contact'
import NotFound from './UI/pages/NotFound'
import CountryDetails from './UI/components/CountryDetails'
import { CountryProvider } from './store/CountryProvider'
import { FilterProvider } from './store/FilterProvider'

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
        },
        {
          path: 'country/:id',
          element: <CountryDetails />
        }
      ]
    }
  ])

  return (
    <>
      <CountryProvider>
        <FilterProvider>
          <RouterProvider router={router} />
        </FilterProvider>
      </CountryProvider>
    </>
  )
}

export default App
