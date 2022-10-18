import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { Add } from '@mui/icons-material'
import Layout from '../../layout'
import EmptyBox from '../../components/empty-box'
import LogoBlue from '../../assets/images/logo-blue.svg'
import './squads.scss'

const Squads: FC = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <div className='mid-container'>
        <div className='d-flex justify-content-between align-items-center'>
          <h2 className='primary-title'>Your Squads</h2>
          <Button className='create-btn blue-btn px-3' onClick={() => navigate('/create-squad')}>
            <Add sx={{ fontSize: 22 }} />
            <span className='d-none d-lg-block ms-2 me-1'>Create Squad</span>
          </Button>
        </div>

        <EmptyBox
          icon={LogoBlue}
          title="You don't have any Squads yet"
          detail='Click on "Create Squad" to set one up in a few clicks!'
        />
      </div>
    </Layout>
  )
}

export default Squads
