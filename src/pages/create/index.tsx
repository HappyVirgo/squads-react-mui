import { FC, useState } from 'react'
import Layout from '../../layout'
import StepList from './step-list'
import ProfileForm from './profile-form'
import OwnerForm from './owner-form'
import ReviewForm from './review-form'
import './create.scss'

const Create: FC = () => {
  const [step, setStep] = useState<number>(1)
  const [squadName, setSquadName] = useState<string>('')
  const [squadDescription, setSquadDescription] = useState<string>('')

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
              <StepList step={step} setStep={setStep} />
            </div>

            <div className='create-main-right'>
              {step === 1 && <ProfileForm setStep={setStep} squadName={squadName} setSquadName={setSquadName} squadDescription={squadDescription} setSquadDescription={setSquadDescription} />}
              {step === 2 && <OwnerForm setStep={setStep} />}
              {step === 3 && <ReviewForm setStep={setStep} squadName={squadName} squadDescription={squadDescription} />}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Create
