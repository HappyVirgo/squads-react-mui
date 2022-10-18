import { FC, useState } from 'react'
import Layout from '../../layout'
import Sidebar from '../../layout/sidebar'
import Assets from './assets'
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
          <h2 className='primary-title ms-2'>Vault</h2>
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
        </div>
      </div>
    </Layout>
  )
}

export default Vault
