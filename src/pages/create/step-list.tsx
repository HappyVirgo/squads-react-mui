import { FC, Dispatch, SetStateAction } from 'react'
import './create.scss'

const Steps = [
  {
    step: 1,
    title: 'Create your Squad',
    detail: 'Add a profile picture for your Squad (JPEG, PNG or GIF), give it a name and add a description. Squad details can also be changed after deployment',
  },
  {
    step: 2,
    title: 'Add owners and set a threshold',
    detail: 'Add up to 10 initial owners for your Squad and set a transaction confirmation threshold. Owners and threshold can be changed after Squad deployment by initiating a transaction',
  },
  {
    step: 3,
    title: 'Review and confirm',
    detail: 'One last look at the selected parameters before the Squad is deployed',
  },
]

interface StepProps {
  step: number,
  setStep: Dispatch<SetStateAction<number>>,
}

const StepList: FC<StepProps> = ({ step, setStep }) => {
  return (
    <ul className='list-unstyled mb-0'>
      {
        Steps.map((el, idx) => (
          <li key={idx} className='step-list'>
            <span className={step > el.step ? 'passed' : (step === el.step ? 'active' : '')}></span>
            <div>
              <h3 className={`secondary-title ${step >= el.step ? '' : 'text-dummy'}`}>{el.title}</h3>
              <p className={`detail-text mt-1 ${step >= el.step ? 'text-white' : ''}`}>{el.detail}</p>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default StepList
