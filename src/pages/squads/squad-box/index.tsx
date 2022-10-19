import { FC } from 'react'
import '../squads.scss'

interface SquadBoxProps {
  name?: string,
  description?: string,
  owners?: number,
  balance?: number,
}

const SquadBox: FC<SquadBoxProps> = ({ name, description, owners, balance }) => {
  return (
    <div className='squad-box d-lg-flex justify-content-between align-items-center mw-100 mb-3'>
      <div className='d-flex align-items-center mb-3 mb-lg-0'>
        <div className='avatar-img flex-shrink-0'></div>
        <div className='ms-3'>
          <h3 className='secondary-title'>{name}</h3>
          <p className='detail-text'>{description ? description : 'N/A'}</p>
        </div>
      </div>

      <div className='d-flex justify-content-between w-100 text-center text-lg-end right'>
        <div className='flex-grow-1'>
          <h3 className='secondary-title'>{owners}</h3>
          <p className='detail-text'>Owners</p>
        </div>

        <div className='flex-grow-1'>
          <h3 className='secondary-title'>${balance}</h3>
          <p className='detail-text'>Balance</p>
        </div>
      </div>
    </div>
  )
}

export default SquadBox
