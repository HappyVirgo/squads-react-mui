import { FC } from 'react'
import { Button } from '@mui/material'
import { Add, ArrowUpward, ArrowDownward } from '@mui/icons-material'
import CopyIcon from '../../../assets/images/copy-icon.svg'
import SolanaIcon from '../../../assets/images/solana-icon.png'
import './assets.scss'

const Assets: FC = () => {
  return (
    <div className='d-lg-flex justify-content-between'>
      <div className='w-100'>
        <div className='asset-box'>
          <div className='d-lg-flex justify-content-between align-items-center mt-2 pb-3 bottom-border'>
            <div className='mb-2 mb-lg-0'>
              <p className='detail-text'>Vault balance</p>
              <h4 className='fw-bold'>%0.03</h4>
            </div>

            <div className='d-flex'>
              <Button className='dark-btn big-btn'>
                <ArrowUpward />
              </Button>
              <Button className='blue-btn big-btn ms-3 me-auto'>
                <ArrowDownward />
              </Button>
              <div className='address-box ms-3'>
                <p className='text-dummy'>address</p>
                <div className='d-flex'>
                  <h3 className='secondary-title me-2'>CshY...3VrP</h3>
                  <img src={CopyIcon} alt='copy' />
                </div>
              </div>
            </div>
          </div>

          <div className='d-flex align-items-center py-3 bottom-border'>
            <img className='round-icon' src={SolanaIcon} width={20} height={20} alt='solana' />
            <h3 className='secondary-title ms-3 me-auto'>
              SOL <span className='text-dummy'>Solana</span>
            </h3>
            <h3 className='secondary-title pe-2'>
              <span className='text-dummy'>$0.03</span> 0.001
            </h3>
          </div>
        </div>

        <div className='asset-box mt-4'>
          <div className='d-flex align-items-center mt-2 pb-3 bottom-border'>
            <h3 className='secondary-title'>Recent transactions</h3>
          </div>

          <div className='d-flex align-items-center py-3 bottom-border'>
            <p className='detail-text text-dummy'>October 18, 2022</p>
          </div>

          <div className='d-lg-flex justify-content-between align-items-center py-3 pe-2 bottom-border'>
            <div className='d-flex justify-content-between justify-content-lg-around w-100 mb-2 mb-lg-0'>
              <div className='d-flex'>
                <img className='round-icon' src={SolanaIcon} width={20} height={20} alt='solana' />
                <h3 className='secondary-title ms-3'>Deposit</h3>
              </div>
              <h3 className='secondary-title'>Hw6u...A8Nh</h3>
            </div>
            <div className='d-flex w-100 justify-content-between justify-content-lg-around w-100'>
              <h3 className='secondary-title text-dummy'>3:11 AM</h3>
              <h3 className='secondary-title'>0.001 SOL</h3>
            </div>
          </div>
        </div>

        <div className='asset-box contacts-box mt-4'>
          <div className='d-flex align-items-center'>
            <h3 className='secondary-title me-auto'>Contacts</h3>
            <Button className='dark-btn'>
              <Add sx={{ fontSize: 20 }} />
            </Button>
          </div>
          <p className='detail-text mt-2'>No contacts yet</p>
        </div>
      </div>

      <div className='asset-box swap-box d-flex justify-content-center align-items-center mt-4 mt-lg-0 ms-lg-4'>
        Swap Box
      </div>
    </div>
  )
}

export default Assets
