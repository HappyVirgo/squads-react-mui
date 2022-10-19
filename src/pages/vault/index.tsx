import { FC, useState } from 'react'
import { Button } from '@mui/material'
import { ArrowUpward, ArrowDownward, AccountBalance, ContentCopy } from '@mui/icons-material'
import Layout from '../../layout'
import Sidebar from '../../layout/sidebar'
import Assets from './assets'
import Nft from './nft'
import Staking from './staking'
import './vault.scss'

const Tabs = [
  {
    name: 'assets',
    title: 'Assets',
  },
  {
    name: 'nft',
    title: 'NFT',
  },
  {
    name: 'staking',
    title: 'Staking',
  },
]

const Vault: FC = () => {
  const [tab, setTab] = useState<string>('assets')

  return (
    <Layout withSidebar>
      <div className='vault-container d-flex'>
        <div className='d-none d-lg-block'>
          <Sidebar />
        </div>

        <div className='w-100'>
          <div className='d-flex justify-content-between align-items-center mt-2'>
            <h2 className='primary-title ms-2'>Vault</h2>
            {tab === 'nft' && (
              <div className='vault-header d-flex'>
                <Button className='dark-btn me-2 me-lg-3'>
                  Buy
                </Button>
                <Button className='dark-btn me-2 me-lg-3'>
                  <span className='text-dummy'>
                    <ArrowUpward sx={{ fontSize: 18 }} />
                    <span className='ms-2 d-none d-lg-inline'>Send</span>
                  </span>
                </Button>
                <Button className='blue-btn me-2 me-lg-3'>
                  <ArrowDownward sx={{ fontSize: 18 }} />
                  <span className='ms-2 d-none d-lg-inline'>Deposit</span>
                </Button>
                <Button className='dark-btn'>
                  <AccountBalance sx={{ fontSize: 14 }} />
                  <span className='mx-2'>CshY...<span className='d-none d-lg-inline'>3VrP</span></span>
                  <ContentCopy sx={{ fontSize: 14 }} />
                </Button>
              </div>
            )}
          </div>
          <ul className='tabs list-unstyled d-flex mt-3 mb-4'>
            {
              Tabs.map((el, idx) => (
                <li key={idx} className={tab === el.name ? 'active' : ''} onClick={() => setTab(el.name)}>
                  <h3 className='secondary-title'>{el.title}</h3>
                </li>
              ))
            }
          </ul>

          {tab === 'assets' && <Assets />}
          {tab === 'nft' && <Nft />}
          {tab === 'staking' && <Staking />}
        </div>
      </div>
    </Layout>
  )
}

export default Vault
