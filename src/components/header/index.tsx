import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import ConnectButton from '../connect-button'
import HeaderMenu from '../header-menu'
import Logo from '../../assets/images/logo.svg'
import LogoMobile from '../../assets/images/logo-mobile.svg'
import HomeIcon from '../../assets/images/home-icon.svg'
import './header.scss'

const Header: FC = () => {
  return (
    <header className='header d-flex align-items-center'>
      <Link to='/' className='d-none d-lg-block'>
        <img src={Logo} width={130} height={40} alt='logo' />
      </Link>
      <Link to='/' className='d-lg-none me-auto'>
        <img src={LogoMobile} width={30} height={40} alt='logo' />
      </Link>

      <Link to='/' className='d-none d-lg-block ms-3 me-auto'>
        <Button className='dark-btn'>
          <img src={HomeIcon} width={20} height={20} alt='home' />
        </Button>
      </Link>

      <ConnectButton />
      <HeaderMenu />
    </header >
  )
}

export default Header
