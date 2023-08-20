import { listSkills } from '../../data/about'

export const Skills = () => {
  return (
    <div className='col-span-2 px-5 lg:px-0 mb-10 lg:mb-0'>
      <div className='text-center'>
        <h2 className='text-2xl dark:text-white border-b-4 border-b-emerald-400 dark:border-b-emerald-600 font-bold inline-block mb-5 uppercase'>
          Skills
        </h2>
      </div>
      <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-3 place-items-center gap-8 mt-5'>
        {listSkills.map((skill) => (
          <div key={skill.id}>
            <img
              src={skill.icon}
              alt={skill.name}
              className='w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16'
            />
            <p className='text-sm text-gray-800 dark:text-gray-300 text-center font-semibold mt-3'>
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>

  )
}
