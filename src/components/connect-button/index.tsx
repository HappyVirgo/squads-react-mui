import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { Close } from '@mui/icons-material'
import LogoBlue from '../../assets/images/logo-blue.svg'
import PhantomIcon from '../../assets/images/phantom-icon.svg'
import BackpackIcon from '../../assets/images/backpack-icon.png'
import GlowIcon from '../../assets/images/glow-icon.png'
import SolflareIcon from '../../assets/images/solflare-icon.svg'
import CoinbaseIcon from '../../assets/images/coinbase-icon.svg'
import LedgerIcon from '../../assets/images/ledger-icon.svg'
import ExodusIcon from '../../assets/images/exodus-icon.svg'
import './connect-button.scss'

const WalletItems = [
  {
    name: 'phantom',
    title: 'Phantom',
    icon: PhantomIcon,
  },
  {
    name: 'backpack',
    title: 'Backpack',
    icon: BackpackIcon,
  },
  {
    name: 'glow',
    title: 'Glow',
    icon: GlowIcon,
  },
  {
    name: 'solflare',
    title: 'Solfalre',
    icon: SolflareIcon,
  },
  {
    name: 'coinbase',
    title: 'Coinbase',
    icon: CoinbaseIcon,
  },
  {
    name: 'ledger',
    title: 'Ledger',
    icon: LedgerIcon,
  },
  {
    name: 'exodus',
    title: 'Exodus',
    icon: ExodusIcon,
  },
]

const ConnectButton: FC = () => {
  const navigate = useNavigate()
  const [agreeDialogOpen, setAgreeDialogOpen] = useState<boolean>(false)
  const [connectDialogOpen, setConnectDialogOpen] = useState<boolean>(false)

  const openAgreeDialog = () => {
    setAgreeDialogOpen(true)
  }
  const closeAgreeDialog = () => {
    setAgreeDialogOpen(false)
  }

  const openConnectDialog = () => {
    setAgreeDialogOpen(false)
    setConnectDialogOpen(true)
  }
  const closeConnectDialog = () => {
    setConnectDialogOpen(false)
  }

  return (
    <>
      <Button variant='contained' className='blue-btn me-2' onClick={openAgreeDialog}>
        Connect wallet
      </Button>

      {/* Acknowledge Terms Dialog */}
      <Dialog
        className='agree-dialog'
        open={agreeDialogOpen}
        onClose={closeAgreeDialog}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <div className='icon-box'>
          <img src={LogoBlue} width={64} height={64} alt='logo' />
        </div>
        <DialogTitle id='alert-dialog-title'>
          {'Acknowledge Terms'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            By connecting your wallet, you agree to the <a href='https://squads.so/terms'>Squads Terms of Service</a> and acknowledge that you have read and understood the <a href='https://squads.so/disclaimer'>Squads Disclaimer</a>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className='blue-btn w-100' onClick={openConnectDialog}>Agree and continue</Button>
        </DialogActions>
      </Dialog>

      {/* Connect your wallet Dialog */}
      <Dialog
        className='connect-dialog'
        open={connectDialogOpen}
        onClose={closeConnectDialog}
        scroll={'paper'}
        aria-labelledby='scroll-dialog-title'
        aria-describedby='scroll-dialog-description'
      >
        <div className='dialog-header d-flex align-items-center'>
          <DialogTitle id='scroll-dialog-title'>Connect your wallet</DialogTitle>
          <Button className='dark-btn' onClick={closeConnectDialog}>
            <Close />
          </Button>
        </div>
        <DialogContent>
          {
            WalletItems.map((el, idx) => (
              <div key={idx} className='wallet' onClick={() => navigate('/squads')}>
                <img src={el.icon} alt={el.name} />
                <span>{el.title}</span>
              </div>
            ))
          }
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ConnectButton
