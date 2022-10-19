import { FC, useState, FormEvent, Dispatch, SetStateAction } from 'react'
import { Button } from '@mui/material'
import { Add } from '@mui/icons-material'
import '../create.scss'

interface OwnerFormProps {
  setStep: Dispatch<SetStateAction<number>>,
}

const OwnerForm: FC<OwnerFormProps> = ({ setStep }) => {
  const [validating, setValidating] = useState<boolean>(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setValidating(true)
    setStep(3)
  }

  return (
    <div className='create-box'>
      <div className='create-box-header'>
        <h3 className='secondary-title pb-3'>Add owners and set a threshold</h3>
      </div>

      <form onSubmit={handleSubmit} className={validating ? 'was-validated' : ''}>
        <div className='owner-box'>
          <div className='form-header ms-3'>
            <h3 className='secondary-title'>Add initial multisig owners</h3>
            <p className='detail-text'>Add owner by public key</p>
          </div>

          <div className='form-floating squad-input mt-4'>
            <input
              className='form-control'
              id='owner1'
              value='Hw6uMJWKvMATcuMN8MzGdCMPXiNRfBQWTCoEruojA8Nh'
              readOnly
            />
            <label htmlFor='owner1'>owner #1</label>
          </div>

          <Button className='dark-btn w-100 mt-4'>
            <Add sx={{ fontSize: 22 }} />
            <span className='ms-2'>Add Owner</span>
          </Button>
        </div>

        <div className='d-flex mt-4'>
          <Button className='dark-btn flex-grow-1 me-2' onClick={() => setStep(1)}>Back</Button>
          <Button type='submit' className='blue-btn flex-grow-1 ms-2'>Next</Button>
        </div>
      </form >
    </div >
  )
}

export default OwnerForm
