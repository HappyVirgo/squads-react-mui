import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { Home } from '@mui/icons-material'
import { LogoIcon, LogoMobile } from '../../assets/icons'
import HeaderMenu from '../header-menu'
import './header.scss'

const Header: FC = () => {
  return (
    <header className='header d-flex align-items-center'>
      <div className='d-none d-lg-block'>
        <Link to='/'>
          <LogoIcon />
        </Link>
      </div>
      <div className='d-lg-none me-auto'>
        <Link to='/'>
          <LogoMobile />
        </Link>
      </div>

      <div className='d-none d-lg-block ms-3 me-auto'>
        <Link to='/'>
          <Button className='dark-btn'>
            <Home></Home>
          </Button>
        </Link>
      </div>

      <Button
        variant='contained'
        className='blue-btn me-2'
      >
        Connect wallet
      </Button>

      <HeaderMenu />
    </header >
  )
}

export default Header
