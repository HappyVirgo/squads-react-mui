import { FC } from 'react'
import EmptyBox from '../../../components/empty-box'
import NftIcon from '../../../assets/images/nft-icon.svg'

const Nft: FC = () => {
  return (
    <div>
      <EmptyBox
        icon={NftIcon}
        title='No NFTs'
        detail='Click on “Deposit” to add your NFTs to the vault'
      />
    </div>
  )
}

export default Nft
