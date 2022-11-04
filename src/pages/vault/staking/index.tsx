import { FC } from 'react'
import { Button } from '@mui/material'
import { KeyboardArrowDown } from '@mui/icons-material'
import StakingIcon from '../../../assets/images/staking-icon.png'
import '../vault.scss'

const Staking: FC = () => {
  return (
    <>
      <div className='d-lg-flex mb-2'>
        <div className='vault-box d-flex w-100 mb-2 mb-lg-0 me-lg-2'>
          <div className='staking-box flex-grow-1 flex-shrink-0'>
            <p className='detail-text'>Staked</p>
            <h3 className='primary-title'>0 SOL</h3>
          </div>

          <div className='staking-box flex-grow-1'>
            <p className='detail-text'>ROI</p>
            <h3 className='primary-title'>0.00000 SOL</h3>
          </div>
        </div>

        <div className='vault-box d-flex w-100'>
          <div className='staking-box w-100'>
            <p className='detail-text'>Activating</p>
            <h3 className='primary-title'>0 SOL</h3>
          </div>

          <div className='staking-box w-100'>
            <p className='detail-text'>Deactivating</p>
            <h3 className='primary-title'>0 SOL</h3>
          </div>

          <div className='staking-box w-100'>
            <p className='detail-text'>Withdrawable</p>
            <h3 className='primary-title'>0 SOL</h3>
          </div>
        </div>
      </div>

      <div className='vault-box d-flex justify-content-between align-items-center'>
        <img className='rounded-3' src={StakingIcon} width={36} height={36} alt='staking' />
        <div className='ms-3 me-auto'>
          <p className='detail-text fw-bolder text-white'>Stakewiz by Laine</p>
          <p className='detail-text'>Validators</p>
        </div>
        <p className='detail-text me-4'>Epoch</p>
        <Button className='dark-btn'>
          <KeyboardArrowDown />
        </Button>
      </div>
    </>
  )
}

export default Staking
