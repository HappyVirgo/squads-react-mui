import { FC, FormEvent, Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import ThresholdIcon from '../../assets/images/threshold-icon.svg'
import UsersIcon from '../../assets/images/users-icon.svg'
import './create.scss'

interface ReviewFormProps {
  setStep: Dispatch<SetStateAction<number>>,
  squadName: string,
  squadDescription: string,
}

const ProfileForm: FC<ReviewFormProps> = ({ setStep, squadName, squadDescription }) => {
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    navigate('/vault')
  }

  return (
    <div className='create-box'>
      <div className='create-box-header'>
        <h3 className='secondary-title pb-3'>Create your Squad</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='d-flex align-items-center'>
          <label htmlFor='avatar'>
            <div className='avatar-img'></div>
          </label>
          <div className='form-header ms-3'>
            <h3 className='secondary-title'>{squadName}</h3>
            <p className='detail-text'>{squadDescription}</p>
          </div>
        </div>

        <div className='d-lg-flex mt-4'>
          <div className='d-flex w-100 mb-3 mb-lg-0'>
            <div className='review-box w-100'>
              <h3 className='d-flex justify-content-between'>
                <span>1/1</span>
                <img src={ThresholdIcon} alt='threshold' />
              </h3>
              <p className='detail-text'>Threshold</p>
            </div>

            <div className='review-box w-100 ms-3 mx-lg-3'>
              <h3 className='d-flex justify-content-between'>
                <span>1</span>
                <img src={UsersIcon} alt='users' />
              </h3>
              <p className='detail-text'>Owners</p>
            </div>
          </div>

          <div className='review-box'>
            <h3>~0.0025<span className='small'>SOL</span></h3>
            <p className='detail-text'>Free</p>
          </div>
        </div>

        <div className='d-flex mt-4'>
          <Button className='dark-btn flex-grow-1 me-2' onClick={() => setStep(2)}>Back</Button>
          <Button type='submit' className='blue-btn flex-grow-1 ms-2'>Confirm</Button>
        </div>
      </form>
    </div>
  )
}

export default ProfileForm
