import { FC } from 'react'
import { Button } from '@mui/material'
import { Add } from '@mui/icons-material'
import Layout from '../../layout'
import LogoBlue from '../../assets/images/logo-blue.svg'

const Squads: FC = () => {
  return (
    <Layout>
      <div className='squad-container'>
        <div className='d-flex justify-content-between align-items-center'>
          <h2 className='primary-title'>Your Squads</h2>
          <Button className='blue-btn px-3'>
            <Add sx={{ fontSize: 22 }} />
            <span className='ms-2 me-1'>Create Squad</span>
          </Button>
        </div>

        <div className='squad-content d-flex flex-column justify-content-center align-items-center'>
          <div className='icon-box'>
            <img src={LogoBlue} width={48} height={48} alt='wallet' />
          </div>
          <h3>
            You don't have any Squads yet
          </h3>
          <p>
            Click on "Create Squad" to set one up in a few clicks!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Squads
