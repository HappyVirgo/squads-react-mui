import ProfileBox from './profile-box'
import SkillBox from './skill-box'
import CommunityBox from './community-box'
import ActivityBox from './activity-box'
import './profile.scss'

const Profile = () => {
  return (
    <main className="overview-container low-bg pt-10">
      <div className="container flex justify-between">
        <aside>
          <ProfileBox />
          <SkillBox />
          <CommunityBox />
        </aside>

        <aside>
          <ActivityBox />
        </aside>
      </div>
    </main>
  )
}

export default Profile
