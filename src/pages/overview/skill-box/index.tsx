import '../overview.scss'

const SkillData = [
  'UX Design',
  'Copywriting',
  'Mobile',
  'Research',
  'User Interview',
  'JS',
  'Logo'
]

const SkillBox = () => {
  return (
    <section className="mb-4">
      <h2 className="high-text mb-3 text-lg font-bold">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {SkillData.map((el, idx) => (
          <div key={idx} className="mid-text mid-bg px-3 py-2 rounded-xl text-xs font-medium">{el}</div>
        ))}
      </div>
    </section>
  )
}

export default SkillBox
