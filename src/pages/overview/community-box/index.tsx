import { Search, AddBoxOutlined } from '@mui/icons-material'
import CommunityImg01 from '../../../assets/images/solana-icon.png'
import CommunityImg02 from '../../../assets/images/staking-icon.png'
import '../overview.scss'

const CommunityData = [
  {
    image: CommunityImg01,
    name: 'UX designers community',
    friends: 32
  },
  {
    image: CommunityImg02,
    name: 'Frontend developers',
    friends: 12
  },
]

const CommunityBox = () => {
  return (
    <section className="skill-box mb-4">
      <div className="flex items-center mb-3">
        <h2 className="high-text text-lg font-bold">Communities</h2>
        <button type="button" className="ml-auto mr-2 p-1">
          <Search sx={{ fontSize: 30 }} className="low-text" />
        </button>
        <button type="button" className="p-1">
          <AddBoxOutlined sx={{ fontSize: 30 }} className="low-text" />
        </button>
      </div>

      {CommunityData.map((el, idx) => (
        <div key={idx} className="community-item flex items-center gap-3 mb-3 text-sm font-medium">
          <img className="rounded-3xl object-cover" src={el.image} alt={el.name} />
          <div>
            <h3 className="high-text mb-1">{el.name}</h3>
            <p className='low-text flex items-center'>
              <span className="inline-block h-2 w-2 mr-2 rounded-full bg-yellow-300"></span>
              <span>{el.friends} your friends are in</span>
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default CommunityBox
