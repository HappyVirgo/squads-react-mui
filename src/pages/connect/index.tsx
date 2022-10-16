import { FC } from 'react'
import Layout from '../../layout'
import ConnectButton from '../../components/connect-button'
import CardIcon from '../../assets/images/card-icon.svg'

const Connect: FC = () => {
  return (
    <Layout>
      <div className='squad-container'>
        <h2 className='primary-title'>Your Squads</h2>

        <div className='squad-content d-flex flex-column justify-content-center align-items-center'>
          <div className='icon-box'>
            <img src={CardIcon} width={48} height={48} alt='wallet' />
          </div>
          <p>
            Connect your wallet to see which Squads you are in
          </p>
          <ConnectButton />
        </div>
      </div>
    </Layout>
  )
}

export default Connect
