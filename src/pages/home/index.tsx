import { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from '@mui/material'
import { Add } from '@mui/icons-material'
import Layout from '../../layout'
import LogoBlue from '../../assets/images/logo-blue.svg'
import './home.scss'

const Home: FC = () => {
  return (
    <Layout>
      <h1 className='mt-5 pt-5 text-center'>This is a Home page!</h1>
    </Layout>
  )
}

export default Home
