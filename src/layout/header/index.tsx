import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { Menu, Close } from '@mui/icons-material'
import ConnectButton from '../../components/connect-button'
import HeaderMenu from '../../components/header-menu'
import Sidebar from '../sidebar'
import Logo from '../../assets/images/logo.svg'
import LogoMobile from '../../assets/images/logo-mobile.svg'
import HomeIcon from '../../assets/images/home-icon.svg'
import './header.scss'

interface HeaderProps {
  withSidbar?: boolean,
}

const Header: FC<HeaderProps> = ({ withSidbar }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  return (
    <header className='header d-flex align-items-center'>
      {withSidbar && (
        <span className='burger-btn d-lg-none me-3' onClick={() => setSidebarOpen(true)}>
          <Menu fontSize='large' />
        </span>
      )}

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

      {withSidbar && (
        <div className={`sidebar-container ${sidebarOpen ? 'open' : 'close'}`}>
          <span className='close-btn' onClick={() => setSidebarOpen(false)}>
            <Close />
          </span>
          <Sidebar />
        </div>
      )}
    </header >
  )
}

export default Header
