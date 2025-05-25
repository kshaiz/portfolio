import Theme from '../style/theme'
import { Button, Stack } from '@mui/material'
import { ReactComponent as Logo } from '../assets/logo.svg'

const NavLink = ({ href, children, ...props }) => {
  const pathName = window.location.pathname.replace(/\/+$/, '')
  return (
    <Button
      href={href}
      {...props}
      className={
        pathName === href.replace(/\/+$/, '') ? 'nav-link--active' : 'nav-link'
      }
    >
      {children}
    </Button>
  )
}

const Header = () => {
  return (
    <header style={{ zIndex: 1000 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <a href="/portfolio/" style={{ height: 24 }}>
          <Logo style={{ marginLeft: Theme.spacing(1) }} />
        </a>
        <nav>
          <Stack direction="row" alignItems="center" spacing={1}>
            <NavLink href="/portfolio/" component="a">
              Case Studies
            </NavLink>
            <NavLink href="/other-works/" component="a">
              Other works
            </NavLink>
            <NavLink href="/portfolio/resume/" component="a">
              Resume
            </NavLink>
            <Button
              href="https://www.linkedin.com/in/shaizk/"
              variant="contained"
              component="a"
              target="_blank"
            >
              Get in touch
            </Button>
          </Stack>
        </nav>
      </Stack>
    </header>
  )
}

export default Header
