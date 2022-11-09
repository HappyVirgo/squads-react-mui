import ProfileBox from './profile-box'
import SkillBox from './skill-box'
import CommunityBox from './community-box'
import ActivityBox from './activity-box'
import './overview.scss'

const Overview = () => {
  return (
    <main className="overview-container low-bg pt-10">
      <div className="container flex flex-col justify-between gap-3 lg:flex-row">
        <aside className="mx-auto">
          <ProfileBox />
          <SkillBox />
          <CommunityBox />
        </aside>

        <section className="flex-grow-1"></section>

        <aside className="mx-auto">
          <ActivityBox />
        </aside>
      </div>
    </main>
  )
}

export default Overview
