import { FC } from 'react'
import { Button } from '@mui/material'
import './create.scss'

const CreateForm: FC = () => {
  return (
    <div className='create-box'>
      <div className='create-box-header'>
        <h3 className='secondary-title pb-3'>Create your Squad</h3>
      </div>

      <form action=''>
        <div className='d-flex'>
          <label htmlFor='avatar'>
            <input className='d-none' type='file' name='avtar' id='avtar' />
            <span className='avatar-img'></span>
          </label>
          <div className='ms-3'>
            <h3 className='secondary-title'>Squad picture</h3>
            <p className='detail-text'>Supporting JPEG, PNG or GIF (under 3MB)</p>
          </div>
        </div>

        <div className='form-floating squad-input mt-4'>
          <input type='text' className='form-control' id='squadName' placeholder='Name' required />
          <label htmlFor='squadName'>Squad name</label>
        </div>

        <div className='form-floating squad-input mt-4'>
          <input type='text' className='form-control' id='squadDescription' placeholder='Description' required />
          <label htmlFor='squadDescription'>Squad description</label>
        </div>

        <div className='d-flex mt-4'>
          <Button className='dark-btn flex-grow-1'>
            Cancel
          </Button>
          <Button className='blue-btn flex-grow-1'>Next</Button>
        </div>
      </form>
    </div>
  )
}

export default CreateForm