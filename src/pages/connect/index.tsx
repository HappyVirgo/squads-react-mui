import { FC } from 'react'
import Layout from '../../layout'
import EmptyBox from '../../components/empty-box'
import CardIcon from '../../assets/images/card-icon.svg'

const Connect: FC = () => {
  return (
    <Layout>
      <div className='mid-container'>
        <h2 className='primary-title'>Your Squads</h2>

        <EmptyBox
          icon={CardIcon}
          title='Connect your wallet to see which Squads you are in'
          connectButton
        />
      </div>
    </Layout>
  )
}

export default Connect
