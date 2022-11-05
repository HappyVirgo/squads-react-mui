import BannerImg from '../../../assets/images/banner.jpg'
import AvatarImg from '../../../assets/images/avatar.jpg'
import '../profile.scss'

const ProfileBox = () => {
  return (
    <section className="profile-box mid-bg mb-4 rounded-3xl overflow-hidden shadow-sm">
      <div className="banner high-bg">
        <img className="w-full h-full object-cover" src={BannerImg} alt="banner" />
      </div>

      <div className="p-3 text-center">
        <div className="flex justify-center">
          <div>
            <h3 className="hight-text mb-1 font-bold">1984</h3>
            <p className="low-text text-xs font-medium">Followers</p>
          </div>

          <div className="avatar -mt-14 mx-2 rounded-3xl overflow-hidden shadow-sm">
            <img className="w-full h-full object-cover" src={AvatarImg} alt="avatar" />
          </div>

          <div>
            <h3 className="hight-text mb-1 font-bold">1002</h3>
            <p className="low-text text-xs font-medium">Following</p>
          </div>
        </div>

        <div className="p-3 pt-4 border-b low-border">
          <h3 className="hight-text mb-2 font-bold">Evgen Ledo</h3>
          <p className="low-text text-sm font-medium mb-3">@ledoteam</p>
          <p className="mid-text text-sm font-medium leading-6">Hello, I'm UX/UI designer. Open to the new projects.</p>
        </div>

        <button type="button" className="mid-text high-bg w-full h-11 mt-3 rounded-xl text-sm font-medium shadow-sm">My Profile</button>
      </div>
    </section>
  )
}

export default ProfileBox
