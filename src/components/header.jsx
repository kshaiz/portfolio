import { useState } from 'react'
import Theme from '../style/theme'
import {
  MenuItem,
  Menu,
  ListItem,
  Button,
  Stack,
  Box,
  IconButton,
} from '@mui/material'
import { ReactComponent as Logo } from '../assets/logo.svg'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

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

const menuOptions = [
  { label: 'Case studies', link: '/portfolio/' },
  { label: 'Other works', link: '/portfolio/#other-works' },
  { label: 'Resume', link: '/portfolio/#resume' },
]

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const open = Boolean(anchorEl)
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index)
    setAnchorEl(null)

    const link = document.createElement('a')
    link.href = menuOptions[index].link
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <header style={{ zIndex: 1000 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <a href={menuOptions[0].link} style={{ height: 24 }}>
          <Logo style={{ marginLeft: Theme.spacing(1) }} />
        </a>
        <nav>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ display: { xs: 'none', md: 'block' } }}
            // sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {menuOptions &&
              menuOptions.length > 0 &&
              menuOptions.map((navItem, index) => (
                <NavLink key={index} href={navItem.link} component="a">
                  {navItem.label}
                </NavLink>
              ))}
            <Button
              href="https://www.linkedin.com/in/shaizk/"
              variant="contained"
              component="a"
              target="_blank"
            >
              Get in touch
            </Button>
          </Stack>
          <Stack
            direction="column"
            spacing={0}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <IconButton onClick={handleClickListItem}>
              <MenuOutlinedIcon />
            </IconButton>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              {menuOptions.map((navItem, index) => (
                <MenuItem
                  key={index}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {navItem.label}
                </MenuItem>
              ))}
              <ListItem>
                <Button
                  href="https://www.linkedin.com/in/shaizk/"
                  variant="contained"
                  component="a"
                  target="_blank"
                >
                  Get in touch
                </Button>
              </ListItem>
            </Menu>
          </Stack>
        </nav>
      </Stack>
    </header>
  )
}

export default Header
