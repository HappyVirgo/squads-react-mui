import { FC } from 'react'
import Layout from '../../layout'
import Sidebar from '../../layout/sidebar'
import './vault.scss'

const Vault: FC = () => {
  return (
    <Layout withSidebar>
      <div className='vault-container d-flex'>
        <div className='d-none d-lg-block'>
          <Sidebar />
        </div>

        <div>
          <h2 className='primary-title ms-2'>Vault</h2>

          <div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Vault
