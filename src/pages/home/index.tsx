import { FC } from 'react'
import { Button } from '@mui/material'
import { Add } from '@mui/icons-material'
import Layout from '../../layout'
import LogoBlue from '../../assets/images/logo-blue.svg'

const Home: FC = () => {
  return (
    <Layout>
      <h1 className='mt-5 pt-5 text-center'>Welcome to Squads website!</h1>
    </Layout>
  )
}

export default Home
