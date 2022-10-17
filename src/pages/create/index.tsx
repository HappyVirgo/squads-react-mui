import { FC, useState } from 'react'
import Layout from '../../layout'
import CreateSteps from './create-steps'
import CreateForm from './create-form'
import './create.scss'


const Create: FC = () => {
  const [step, setStep] = useState<number>(1)

  return (
    <Layout>
      <div className='px-2'>
        <div className='create-container'>
          <div className='create-header'>
            <h2 className='primary-title'>
              Create your multisig with Squads in a few clicks
            </h2>
            <p className='detail-text'>
              The most secure and intuitive way to manage on-chain assets individually or together with your team
            </p>
          </div>

          <div className='create-main d-flex justify-content-between'>
            <div className='create-main-left d-none d-lg-block'>
              <CreateSteps step={step} setStep={setStep} />
            </div>

            <div className='create-main-right'>
              <CreateForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Create
