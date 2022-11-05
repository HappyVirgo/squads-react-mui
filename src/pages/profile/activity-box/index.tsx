import AvatarImg01 from '../../../assets/images/glow-icon.png'
import AvatarImg02 from '../../../assets/images/exodus-icon.svg'
import AvatarImg03 from '../../../assets/images/coinbase-icon.svg'
import AvatarImg04 from '../../../assets/images/backpack-icon.png'
import AvatarImg05 from '../../../assets/images/logo-blue.svg'
import '../profile.scss'

const ActivityData = [
  {
    type: 'normal',
    image: AvatarImg01,
    name: 'Vitaliy Akterskiy',
    content: 'subscribed on you',
    at: '3 mins ago',
    price: '10.00',
    unit: 'tip',
    replied: false
  },
  {
    type: 'normal',
    image: AvatarImg02,
    name: 'Maksym Karafizi',
    content: 'bought your video',
    at: '6 hrs ago',
    price: '90.00',
    unit: 'purchase',
    replied: true
  },
  {
    type: 'normal',
    image: AvatarImg03,
    name: 'Evgeniy Alexandrov',
    content: 'sent you a tip',
    at: '7 hrs ago',
    price: '30.00',
    unit: 'purchase',
    replied: false
  },
  {
    type: 'normal',
    image: AvatarImg04,
    name: 'Rosaline Kumbirai',
    content: 'sent you job request',
    at: '1 hr ago',
    price: '20.00',
    unit: 'purchase',
    replied: false
  },
  {
    type: 'join',
    image: AvatarImg05,
    name: 'UX designers group',
    at: '12 hrs ago',
    replied: false
  },
  {
    type: 'normal',
    image: AvatarImg02,
    name: 'Maksym Karafizi',
    content: 'bought your video',
    at: '6 hrs ago',
    price: '90.00',
    unit: 'purchase',
    replied: true
  },
  {
    type: 'normal',
    image: AvatarImg03,
    name: 'Evgeniy Alexandrov',
    content: 'sent you a tip',
    at: '7 hrs ago',
    price: '30.00',
    unit: 'purchase',
    replied: false
  },
]

const ActivityBox = () => {
  return (
    <section className="activity-box mid-bg rounded-3xl overflow-hidden shadow-sm">
      <div className="h-full p-3 overflow-auto">
        <h2 className="high-text font-bold">Recent activity</h2>
        {ActivityData.map((el, idx) => (
          <div className="activity-item mt-4 rounded-3xl shadow-sm">
            <div className="flex items-center">
              <img className="h-12 w-12 mr-2 rounded-2xl object-cover" src={el.image} alt={el.name} />
              <div>
                <h3 className="high-text mb-1 text-sm font-bold">{el.name}</h3>
                <p className="low-text text-xs font-medium">
                  {el.content && <span>{el.content}</span>}
                  <span className="inline-block h-2 w-2 mx-1 rounded-full bg-yellow-300"></span>
                  <span>{el.at}</span>
                </p>
              </div>
            </div>

            {el.type === 'normal' && (
              <div className="low-bg flex items-center justify-between mt-3 p-2 rounded-2xl">
                <h4 className="ml-2 font-bold">${el.price} <span className="low-text text-xs">/{el.unit}</span></h4>
                {el.replied ? (
                  <button type="button" className="mid-text high-bg px-3 py-2 rounded-xl text-xs font-medium shadow-sm">Thanked</button>
                ) : (
                  <button type="button" className="px-3 py-2 rounded-xl text-xs font-medium text-black bg-yellow-300 shadow-sm">Thanks</button>
                )}
              </div>
            )}

            {el.type === 'join' && (
              <div className="flex justify-end gap-2 mt-3 px-2">
                <button type="button" className="mid-text high-bg px-3 py-2 rounded-xl text-xs font-medium shadow-sm">Discard</button>
                <button type="button" className="px-3 py-2 rounded-xl text-xs font-medium text-black bg-yellow-300 shadow-sm">Join</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ActivityBox
