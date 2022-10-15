import { FC, useState } from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import { MoreHoriz, GitHub, InsertDriveFileOutlined, Twitter } from '@mui/icons-material'
import './header-menu.scss'

const DiscordIcon: FC = () => (
  <svg width='18' height='14' fill='#fff' xmlns='http://www.w3.org/2000/svg'>
    <path fillRule='evenodd' clipRule='evenodd' d='M14.7758 1.70297C13.7135 1.21555 12.5744 0.856441 11.3833 0.650765C11.3617 0.646796 11.34 0.656716 11.3288 0.676556C11.1823 0.937122 11.02 1.27705 10.9064 1.54423C9.62536 1.35245 8.3509 1.35245 7.09614 1.54423C6.98248 1.27111 6.81431 0.937122 6.66715 0.676556C6.65597 0.657378 6.63431 0.647458 6.61262 0.650765C5.42224 0.855784 4.28311 1.21489 3.22018 1.70297C3.21097 1.70693 3.20309 1.71355 3.19785 1.72215C1.03716 4.95017 0.445255 8.09886 0.735623 11.2085C0.736937 11.2237 0.745477 11.2383 0.757302 11.2475C2.18287 12.2944 3.56377 12.93 4.91902 13.3513C4.94071 13.3579 4.9637 13.3499 4.9775 13.3321C5.29809 12.8943 5.58386 12.4327 5.82888 11.9472C5.84334 11.9188 5.82954 11.8851 5.79999 11.8738C5.3467 11.7019 4.91508 11.4922 4.49989 11.2541C4.46705 11.235 4.46442 11.188 4.49464 11.1655C4.58201 11.1 4.6694 11.0319 4.75283 10.9631C4.76792 10.9506 4.78895 10.9479 4.8067 10.9559C7.53431 12.2012 10.4873 12.2012 13.1827 10.9559C13.2004 10.9473 13.2215 10.9499 13.2372 10.9625C13.3207 11.0313 13.408 11.1 13.4961 11.1655C13.5263 11.188 13.5243 11.235 13.4915 11.2541C13.0763 11.4968 12.6447 11.7019 12.1907 11.8732C12.1612 11.8844 12.148 11.9188 12.1625 11.9472C12.4128 12.432 12.6985 12.8936 13.0132 13.3314C13.0263 13.3499 13.05 13.3579 13.0717 13.3513C14.4335 12.93 15.8144 12.2944 17.24 11.2475C17.2525 11.2383 17.2603 11.2244 17.2617 11.2092C17.6092 7.61407 16.6796 4.49121 14.7975 1.7228C14.7929 1.71355 14.785 1.70693 14.7758 1.70297ZM6.23617 9.31511C5.41498 9.31511 4.73833 8.56119 4.73833 7.6353C4.73833 6.7094 5.40185 5.95548 6.23617 5.95548C7.07704 5.95548 7.74713 6.71602 7.73399 7.6353C7.73399 8.56119 7.07047 9.31511 6.23617 9.31511ZM10.2764 7.6353C10.2764 8.56119 10.953 9.31511 11.7742 9.31511C12.6151 9.31511 13.272 8.56119 13.272 7.6353C13.2851 6.71602 12.6151 5.95548 11.7742 5.95548C10.9399 5.95548 10.2764 6.7094 10.2764 7.6353Z' fill='white' />
  </svg>
)

const SquadsIcon: FC = () => (
  <svg width='16' height='16' fill='#fff' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'
    viewBox='0 0 30 33'>
    <path className='st0' d='M29.4,8.5c0-0.1-0.1-0.2-0.2-0.3l-6.3-3.5c-1.3-0.7-3.2-0.7-4.5,0c0,0-0.1,0-0.1,0.1V3.3c0-0.4-0.2-1.1-1.2-1.7
	l-1.8-1c-0.2-0.1-0.5-0.1-0.7,0L1,8.2L0.7,8.3c0,0,0,0-0.1,0.1L0.6,8.6l0,0.1l0,7c0,1.4,1,3.1,2.3,3.8c0,0,0,0,0,0l-1.4,0.8
	c-0.3,0.2-0.9,0.7-0.9,1.8v2c0,0.1,0,0.3,0.1,0.4c0.1,0.1,0.2,0.2,0.3,0.3l13.7,7.6l0.1,0.1l0.3,0l0.1,0l0,0l6.4-3.5
	c1.3-0.7,2.3-2.3,2.3-3.8c0,0,0,0,0-0.1l1.4,0.8c0.6,0.3,1.3,0.3,2-0.1l1.8-1c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.1-0.2,0.1-0.4
	l0-15.2C29.5,8.8,29.5,8.7,29.4,8.5z M26.5,24.4c-0.3,0.2-0.5,0.2-0.6,0.1c-0.1,0-0.1-0.2-0.1-0.5c0,0,0-0.6,0.4-1.3
	c0.3-0.7,0.5-1.3,0.5-1.9c0-0.8-0.3-1.4-0.8-1.8c-0.4-0.3-0.9-0.4-1.4-0.3c-0.1,0-0.2,0.1-0.4,0.1c-0.1,0.1-0.3,0.1-0.5,0.2
	c-0.3,0.2-0.5,0.3-0.7,0.5c-0.7,0.6-1.1,1.4-1.4,2.3c-0.1,0.3-0.1,0.5-0.1,0.9V23c0,0.1,0,0.3,0,0.4c0.1,0.4,0.3,0.9,0.6,1.2
	c0.2,0.2,0.2,0.5,0.2,0.6c0,0.9-0.7,2-1.5,2.4l-5,2.8V16.9l1.4-0.8c0.3-0.2,0.5-0.2,0.6-0.1c0,0.1,0.1,0.2,0.1,0.4
	c0,0,0,0.6-0.4,1.4c-0.1,0.2-0.2,0.5-0.3,0.7c-0.1,0.3-0.2,0.7-0.2,1.1c0,0.8,0.3,1.4,0.8,1.8l0.3,0.2c0.4,0.2,0.9,0.2,1.4,0
	c0.2-0.1,0.3-0.1,0.5-0.2l0.1-0.1c1.2-0.7,2-2.2,2.1-3.6l0-0.3c0-0.2-0.1-0.5-0.1-0.7c-0.1-0.3-0.3-0.5-0.5-0.8
	c-0.2-0.2-0.2-0.5-0.2-0.6c0-0.9,0.7-2,1.5-2.4l5-2.8v13.5L26.5,24.4L26.5,24.4z M23.1,22.4c0.2-0.5,0.5-1,0.9-1.4
	c0.1-0.1,0.3-0.3,0.5-0.4c0.1,0,0.1-0.1,0.2-0.1c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.2,0c0.1,0.1,0.1,0.2,0.1,0.5c0,0.3-0.1,0.7-0.3,1.2
	c-0.3,0.6-0.4,1.1-0.5,1.5l-1.4-0.8C23,22.7,23,22.5,23.1,22.4z M13.1,11.1c0.8-0.4,2.1-0.4,2.9,0c0.1,0,0.1,0.1,0.2,0.1
	c0.1,0.1,0.2,0.2,0.2,0.2c0,0.1-0.1,0.2-0.4,0.4c-0.1,0-0.1,0.1-0.2,0.1c-0.3,0.1-0.7,0.2-1.1,0.2c-0.8,0.1-1.4,0.3-1.7,0.4
	c-0.2,0.1-0.3,0.1-0.3,0.1c-0.5,0.3-0.9,0.6-1,1.1l-1-0.5c0.3-0.1,0.5-0.2,0.8-0.3c0.3-0.2,0.5-0.4,0.8-0.7c0.1-0.2,0.3-0.4,0.3-0.6
	C12.7,11.4,12.8,11.3,13.1,11.1L13.1,11.1z M2,10.2l12.2,6.8v1.6c0,0.3-0.1,0.4-0.1,0.5c0,0-0.1,0-0.2,0c-0.1,0-0.2-0.1-0.4-0.1
	c0,0-0.5-0.3-1-1c-0.3-0.4-0.8-1-1.4-1.3c-0.7-0.4-1.4-0.5-2-0.2L9,16.5c-0.5,0.3-0.8,0.7-0.9,1.3c0,0.2,0,0.3,0,0.5
	c0,1.4,0.9,2.9,2.1,3.7l0.1,0.1c0.5,0.3,1.1,0.4,1.7,0.3c0.3-0.1,0.6,0.1,0.7,0.1c0.7,0.4,1.2,1.2,1.4,2c0,0.1,0,0.3,0,0.4v5.5
	L2,23.7v-1.6c0-0.3,0.1-0.4,0.2-0.5c0.1,0,0.3,0,0.6,0.1l0,0c0.1,0.1,0.5,0.4,1,1c0.4,0.6,0.9,1,1.4,1.3c0.1,0,0.1,0.1,0.2,0.1
	l0.1,0.1l0.1,0c0.5,0.2,1.1,0.2,1.5,0c0.5-0.2,0.9-0.7,1-1.4c0-0.2,0-0.3,0-0.5c0-1.4-0.9-2.9-2.1-3.7l-0.1-0.1
	c-0.1-0.1-0.3-0.1-0.4-0.2c-0.4-0.2-0.9-0.2-1.3-0.1c-0.3,0.1-0.6,0-0.7-0.1C2.7,17.7,2,16.6,2,15.7V10.2z M12.3,20.8
	c-0.2,0-0.3,0-0.5,0.1c-0.2,0-0.4,0-0.6-0.1l-0.1-0.1c-0.8-0.5-1.4-1.5-1.4-2.4c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3
	c0.1,0,0.3,0,0.6,0.1c0.3,0.2,0.6,0.5,0.9,0.9c0.6,0.8,1.3,1.3,1.4,1.4c0.3,0.1,0.5,0.3,0.8,0.3c0.2,0,0.4,0,0.6,0v1.1
	c-0.2-0.2-0.5-0.4-0.7-0.5C13.1,20.9,12.7,20.8,12.3,20.8z M6.6,22.3c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2-0.1,0.3c-0.1,0-0.2,0-0.4,0
	c-0.1,0-0.1-0.1-0.2-0.1c-0.3-0.2-0.6-0.5-0.9-0.9c-0.4-0.5-0.8-0.9-1.1-1.1l1.3-0.7C6,20.4,6.6,21.5,6.6,22.3z M13.2,14.5
	c0,0,0.1-0.2,0.4-0.3c0,0,0.1,0,0.1,0c0.4-0.2,0.8-0.3,1.3-0.3c0.6-0.1,1.1-0.2,1.5-0.3c0.1-0.1,0.3-0.1,0.4-0.2
	c0.7-0.4,1.1-1,1.2-1.6c0-0.6-0.2-1.1-0.8-1.6C17.1,10,17,9.9,16.8,9.8c-0.6-0.3-1.4-0.5-2.2-0.5c-0.7,0-1.5,0.2-2.2,0.5l-0.1,0.1
	c-0.3,0.2-0.6,0.4-0.8,0.6l-0.1,0.1c-0.1,0.2-0.2,0.4-0.3,0.6l0,0c0,0.1-0.1,0.1-0.1,0.2c-0.1,0.1-0.2,0.2-0.3,0.3
	c-0.8,0.4-2.1,0.4-3,0l-5-2.7L15,2.1l1.4,0.8c0.3,0.2,0.4,0.3,0.4,0.4c0,0-0.1,0.2-0.3,0.3c-0.1,0-0.6,0.3-1.4,0.3l-0.1,0
	c-0.2,0-0.4,0-0.6,0.1l-0.1,0c-0.4,0.1-0.7,0.2-1.1,0.4c-0.6,0.3-0.9,0.7-1.1,1.2C12.1,5.8,12,6,12,6.1c0,0.6,0.2,1.1,0.8,1.6
	c0.1,0.1,0.3,0.2,0.4,0.3c0.2,0.1,0.4,0.2,0.6,0.3c0.9,0.3,2,0.3,2.9,0.1l0.1,0c0.2-0.1,0.4-0.1,0.7-0.3l0.2-0.1
	c0.2-0.1,0.4-0.3,0.6-0.5c0.2-0.2,0.4-0.5,0.4-0.8c0.1-0.2,0.3-0.4,0.4-0.5c0.8-0.4,2.2-0.4,3,0l5,2.8L15,15.6l-1.5-0.8
	C13.3,14.7,13.2,14.5,13.2,14.5z M17.2,7L17.2,7L17.2,7L17.2,7z M15.2,5.5c0.7-0.1,1.2-0.2,1.6-0.4v1.5c-0.2,0.1-0.3,0.1-0.5,0.2
	c-0.6,0.2-1.4,0.1-2,0c-0.1,0-0.3-0.1-0.4-0.2c-0.1,0-0.1-0.1-0.2-0.1c-0.1-0.1-0.2-0.2-0.2-0.3c0-0.1,0.1-0.2,0.4-0.3
	c0.2-0.1,0.4-0.2,0.7-0.2c0.2,0,0.3-0.1,0.5-0.1L15.2,5.5z M19.2,15.4l-0.1-0.1c0,0,0-0.1-0.1-0.1l1-0.6c-0.1,0.3-0.1,0.5-0.1,0.8
	c0,0,0,0.9,0.7,1.6c0.1,0.1,0.2,0.3,0.2,0.4l0,0.1l0,0.1c0,0.9-0.7,1.9-1.4,2.3l-0.1,0c-0.1,0-0.1,0.1-0.2,0.1c-0.1,0-0.3,0.1-0.4,0
	c-0.1,0-0.1-0.2-0.1-0.5c0-0.2,0-0.4,0.1-0.6c0.1-0.2,0.1-0.3,0.2-0.6c0.5-1.1,0.5-1.9,0.5-1.9C19.4,16.1,19.4,15.7,19.2,15.4z'/>
  </svg>
)

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
          <a href='https://github.com/squads-dapp/squads-mpl' target='_blank'>
            <GitHub />
            <span className='ms-3'>Github</span>
          </a>
        </MenuItem>
        <MenuItem>
          <a href='https://docs.squads.so/squads-v3-docs' target='_blank'>
            <InsertDriveFileOutlined />
            <span className='ms-3'>Docs</span>
          </a>
        </MenuItem>
        <MenuItem>
          <a href='https://twitter.com/SquadsProtocol' target='_blank'>
            <Twitter />
            <span className='ms-3'>Twitter</span>
          </a>
        </MenuItem>
        <MenuItem>
          <a href='https://discord.gg/Qwhew4M4RS' target='_blank'>
            <DiscordIcon />
            <span className='ms-3'>Discord</span>
          </a>
        </MenuItem>
        <MenuItem>
          <a href='https://app.squads.so' target='_blank'>
            <SquadsIcon />
            <span className='ms-3'>Squads V2</span>
          </a>
        </MenuItem>
      </Menu>
    </>
  )
}

export default HeadMenu
