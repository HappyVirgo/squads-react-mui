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
    <div className='squad-box d-flex justify-content-between align-items-center mb-3'>
      <div className='d-flex align-items-center'>
        <div className='avatar-img'></div>
        <div className='ms-3'>
          <h3 className='secondary-title'>{name}</h3>
          <p className='detail-text'>{description ? description : 'N/A'}</p>
        </div>
      </div>

      <div className='d-flex justify-content-between right text-end'>
        <div>
          <h3 className='secondary-title'>{owners}</h3>
          <p className='detail-text'>Owners</p>
        </div>

        <div>
          <h3 className='secondary-title'>${balance}</h3>
          <p className='detail-text'>Balance</p>
        </div>
      </div>
    </div>
  )
}

export default SquadBox
