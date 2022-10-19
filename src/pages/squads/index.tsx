import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { Add, Search } from '@mui/icons-material'
import Layout from '../../layout'
import EmptyBox from '../../components/empty-box'
import SquadBox from './squad-box'
import LogoBlue from '../../assets/images/logo-blue.svg'
import './squads.scss'

const SquadsData = [
  {
    name: 'A',
    description: 'This is a description. This is a description. This is a description.',
    owners: 1,
    balance: 0.03,
  },
  {
    name: 'B',
    description: 'Lorem Ipsum',
    owners: 1,
    balance: 0.03,
  },
]

const Squads: FC = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <div className='mid-container'>
        <div className='d-flex justify-content-between align-items-center'>
          <h2 className='primary-title'>Your Squads</h2>
          <Button className='create-btn blue-btn px-3' onClick={() => navigate('/create-squad')}>
            <Add sx={{ fontSize: 22 }} />
            <span className='d-none d-lg-block ms-2 me-1'>Create Squad</span>
          </Button>
        </div>

        {
          SquadsData.length === 0 ? (
            <EmptyBox
              icon={LogoBlue}
              title="You don't have any Squads yet"
              detail='Click on "Create Squad" to set one up in a few clicks!'
            />
          ) : (
            <>
              <div className='squad-input input-group my-4'>
                <span className='input-group-text text-white'>
                  <Search />
                </span>
                <input
                  className='form-control'
                  id='search'
                  placeholder='Search Squads'
                />
              </div>

              {
                SquadsData.map((el, idx) => (
                  <SquadBox
                    key={idx}
                    name={el.name}
                    description={el.description}
                    owners={el.owners}
                    balance={el.balance}
                  />
                ))
              }
            </>
          )
        }

      </div>
    </Layout>
  )
}

export default Squads
