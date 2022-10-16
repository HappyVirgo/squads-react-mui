import { FC, useState } from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import { MoreHoriz } from '@mui/icons-material'
import GithubIcon from '../../assets/images/github-icon.svg'
import DocsIcon from '../../assets/images/docs-icon.svg'
import TwitterIcon from '../../assets/images/twitter-icon.svg'
import DiscordIcon from '../../assets/images/discord-icon.svg'
import SquadsIcon from '../../assets/images/squads-icon.svg'
import './header-menu.scss'

const HeaderMenuItems = [
  {
    name: 'github',
    title: 'Github',
    icon: GithubIcon,
    link: 'https://github.com/squads-dapp/squads-mpl',
  },
  {
    name: 'docs',
    title: 'Docs',
    icon: DocsIcon,
    link: 'https://docs.squads.so/squads-v3-docs',
  },
  {
    name: 'twitter',
    title: 'Twitter',
    icon: TwitterIcon,
    link: 'https://twitter.com/SquadsProtocol',
  },
  {
    name: 'discord',
    title: 'Discord',
    icon: DiscordIcon,
    link: 'https://discord.gg/Qwhew4M4RS',
  },
  {
    name: 'squads',
    title: 'Squads V2',
    icon: SquadsIcon,
    link: 'https://app.squads.so',
  },
]

const HeaderMenu: FC = () => {
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
        <MoreHoriz />
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
        {
          HeaderMenuItems.map((el, idx) => (
            <a key={idx} href={el.link} target='_blank' rel='noreferrer'>
              <MenuItem>
                <img src={el.icon} className='menu-icon' alt={el.name} />
                <span>{el.title}</span>
              </MenuItem>
            </a>
          ))
        }
      </Menu>
    </>
  )
}

export default HeaderMenu
