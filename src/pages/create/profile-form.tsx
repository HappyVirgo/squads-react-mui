import { FC, useState, FormEvent, Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import './create.scss'

interface ProfileFormProps {
  setStep: Dispatch<SetStateAction<number>>,
  squadName: string,
  setSquadName: Dispatch<SetStateAction<string>>,
  squadDescription: string,
  setSquadDescription: Dispatch<SetStateAction<string>>,
}

const ProfileForm: FC<ProfileFormProps> = ({ setStep, squadName, setSquadName, squadDescription, setSquadDescription }) => {
  const navigate = useNavigate()
  const [validating, setValidating] = useState<boolean>(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setValidating(true)
    if (squadName !== '') {
      setStep(2)
    }
  }

  return (
    <div className='create-box'>
      <div className='create-box-header'>
        <h3 className='secondary-title pb-3'>Create your Squad</h3>
      </div>

      <form onSubmit={handleSubmit} className={validating ? 'was-validated' : ''} noValidate>
        <div className='d-flex align-items-center'>
          <label htmlFor='avatar'>
            <input className='d-none' type='file' name='avatar' id='avatar' />
            <span className='avatar-img'></span>
          </label>
          <div className='form-header ms-3'>
            <h3 className='secondary-title'>Squad picture</h3>
            <p className='detail-text'>Supporting JPEG, PNG or GIF (under 3MB)</p>
          </div>
        </div>

        <div className='form-floating squad-input mt-4'>
          <input
            className='form-control'
            id='squadName'
            value={squadName}
            onChange={(e) => setSquadName(e.target.value)}
            required
            autoComplete='off'
          />
          <label htmlFor='squadName'>Squad name</label>
          <p className='invalid-feedback'>You must add a name</p>
        </div>

        <div className='form-floating squad-input mt-4'>
          <input
            className='form-control'
            id='squadDescription'
            value={squadDescription}
            onChange={(e) => setSquadDescription(e.target.value)}
            autoComplete='off'
          />
          <label htmlFor='squadDescription'>Squad description</label>
        </div>

        <div className='d-flex mt-4'>
          <Button className='dark-btn flex-grow-1 me-2' onClick={() => navigate('/squads')}>Cancel</Button>
          <Button type='submit' className='blue-btn flex-grow-1 ms-2'>Next</Button>
        </div>
      </form>
    </div>
  )
}

export default ProfileForm
