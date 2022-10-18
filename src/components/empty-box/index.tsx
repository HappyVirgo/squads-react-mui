import { FC } from 'react'
import ConnectButton from '../../components/connect-button'
import './empty-box.scss'

interface EmptyBoxProps {
  icon: string,
  title: string,
  detail?: string,
  connectButton?: boolean,
}

const EmptyBox: FC<EmptyBoxProps> = ({ icon, title, detail, connectButton }) => {
  return (
    <div className='empty-box d-flex flex-column justify-content-center align-items-center text-center'>
      <div className='icon-box'>
        <img src={icon} width={48} height={48} alt='wallet' />
      </div>
      <h3 className='secondary-title'>{title}</h3>
      {detail && <p className='detail-text'>{detail}</p>}
      {connectButton && <ConnectButton />}
    </div>
  )
}

export default EmptyBox
