import { FC, useState } from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import { MoreHoriz, GitHub, InsertDriveFileOutlined, Twitter } from '@mui/icons-material'
import { DiscordIcon, SquadsIcon } from '../../assets/icons'
import './header-menu.scss'

const HeadMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        className='dark-btn ms-1'
        id='header-menu-button'
        aria-controls={open ? 'header-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHoriz></MoreHoriz>
      </Button>
      <Menu
        className='header-menu'
        id='header-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'header-menu-button',
        }}
      >
        <MenuItem>
          <a href='https://github.com/squads-dapp/squads-mpl' target='_blank' rel='noreferrer'>
            <GitHub />
            <span className='ms-3'>Github</span>
          </a>
        </MenuItem>
        <MenuItem>
          <a href='https://docs.squads.so/squads-v3-docs' target='_blank' rel='noreferrer'>
            <InsertDriveFileOutlined />
            <span className='ms-3'>Docs</span>
          </a>
        </MenuItem>
        <MenuItem>
          <a href='https://twitter.com/SquadsProtocol' target='_blank' rel='noreferrer'>
            <Twitter />
            <span className='ms-3'>Twitter</span>
          </a>
        </MenuItem>
        <MenuItem>
          <a href='https://discord.gg/Qwhew4M4RS' target='_blank' rel='noreferrer'>
            <DiscordIcon />
            <span className='ms-3'>Discord</span>
          </a>
        </MenuItem>
        <MenuItem>
          <a href='https://app.squads.so' target='_blank' rel='noreferrer'>
            <SquadsIcon />
            <span className='ms-3'>Squads V2</span>
          </a>
        </MenuItem>
      </Menu>
    </>
  )
}

export default HeadMenu
