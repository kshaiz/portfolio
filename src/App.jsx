import { useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './style/theme'

import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Resume from './pages/resume'
import OtherWorks from './pages/other-works'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/portfolio',
    element: <Home />,
  },
  {
    path: '/portfolio/resume',
    element: <Resume />,
  },
  {
    path: '/portfolio/other-works',
    element: <OtherWorks />,
  },
])

function App() {
  let page = <Home />
  switch (window.location.pathname) {
    case '/portfolio/resume':
    case '/portfolio/resume/':
      document.title = 'Shaiz | Resume'
      page = <Resume />
      break
    case '/portfolio/other-works':
    case '/portfolio/other-works/':
      document.title = 'Shaiz | Other Works'
      page = <OtherWorks />
      break
    default:
      document.title = 'Shaiz | Product Designer | Canada'
      page = <Home />
      break
  }

  useEffect(() => {
    const handleLoad = () => {
      const elements = document.querySelectorAll('.fade-in-block')
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect()
        if (rect.bottom - rect.height <= window.innerHeight) {
          setTimeout(() => {
            element.style.opacity = 1
            element.style.transform = 'translateY(0)'
          }, index * 200)
        }
      })
    }

    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className="app">
          <Header />
          <main>
            <RouterProvider router={router} />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
