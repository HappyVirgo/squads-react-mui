import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import QRIcon from '../../assets/images/qr-icon.svg'
import CopyIcon from '../../assets/images/copy-icon.svg'
import ShareIcon from '../../assets/images/share-icon.svg'
import TransactionsIcon from '../../assets/images/transactions-icon.svg'
import OwnersIcon from '../../assets/images/owners-icon.svg'
import VaultIcon from '../../assets/images/vault-icon.svg'
import ProgramsIcon from '../../assets/images/program-icon.svg'
import BuilderIcon from '../../assets/images/builder-icon.svg'
import InfoIcon from '../../assets/images/info-icon.svg'
import './sidebar.scss'

const Actions = [
  {
    name: 'qr',
    icon: QRIcon,
    url: '/'
  },
  {
    name: 'copy',
    icon: CopyIcon,
    url: '/'
  },
  {
    name: 'share',
    icon: ShareIcon,
    url: '/'
  },
]

const Links = [
  {
    name: 'transactions',
    title: 'Transactions',
    icon: TransactionsIcon,
    url: '/transactions'
  },
  {
    name: 'owners',
    title: 'Owners',
    icon: OwnersIcon,
    url: '/owners'
  },
  {
    name: 'vault',
    title: 'Vault',
    icon: VaultIcon,
    url: '/vault'
  },
  {
    name: 'programs',
    title: 'Programs',
    icon: ProgramsIcon,
    url: '/programs'
  },
  {
    name: 'tx-builder',
    title: 'TX Builder',
    icon: BuilderIcon,
    url: '/tx-builder'
  },
  {
    name: 'info',
    title: 'Info',
    icon: InfoIcon,
    url: '/info'
  },
]

const Sidebar: FC = () => {
  const { pathname } = useLocation()
  console.log(pathname)

  return (
    <div className='sidebar'>
      <div className='profile-box d-lg-flex flex-column align-items-center'>
        <div className='d-flex flex-lg-column align-items-center text-lg-center'>
          <span className='avatar-img mx-2 mx-lg-0 mb-lg-2'></span>
          <div>
            <p className='detail-text'>Test</p>
            <h3 className='secondary-title'>$0.03</h3>
          </div>
        </div>

        <div className='d-flex justify-content-between w-100 mt-2'>
          {
            Actions.map((el, idx) => (
              <Link key={idx} to={el.url} className='action d-flex justify-content-center align-items-center'>
                <img src={el.icon} width={15} height={15} alt={el.name} />
              </Link>
            ))
          }
        </div>
      </div>

      <div className='mt-3'>
        {
          Links.map((el, idx) => (
            <Link key={idx} to={el.url} className={`sidebar-link d-flex mt-2 px-3 py-2 ${pathname.includes(el.name) ? 'active' : ''}`}>
              <img src={el.icon} alt={el.name} />
              <h3 className='secondary-title ms-3'>{el.title}</h3>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar
