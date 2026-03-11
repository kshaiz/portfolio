import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../../assets/logo.svg'

export function Navigation() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    // { name: 'Case Studies', path: '/case-studies' },
    { name: 'Work Samples', path: '/work-samples' },
    { name: 'Resume', path: '/resume' },
  ]

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                  isActive(item.path)
                    ? 'bg-pink-200 text-slate-900'
                    : 'text-neutral-600 hover:text-pink-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 text-xs font-medium uppercase tracking-wide transition-colors ${
                  isActive(item.path)
                    ? 'bg-slate-200 text-slate-900'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
