import { useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './style/theme'

import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Resume from './pages/resume'
import OtherWorks from './pages/other-works'

import { Routes, Route, HashRouter } from 'react-router-dom'

function App() {
  let page = <Home />
  switch (window.location.pathname) {
    case '/portfolio/resume':
    case '/portfolio/resume/':
      document.title = 'Shaiz | Resume'
      break
    case '/portfolio/other-works':
    case '/portfolio/other-works/':
      document.title = 'Shaiz | Other Works'
      break
    default:
      document.title = 'Shaiz | Product Designer | Canada'
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
      <HashRouter>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <div className="app">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/other-works" element={<OtherWorks />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </HashRouter>
    </>
  )
}

export default App
