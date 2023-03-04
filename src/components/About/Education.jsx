import { listEducation } from '../../data/about'
import { Timeline } from './Timeline'

export const Education = () => {
  return (
    <div className='px-5 lg:px-0 mb-8 lg:mb-0'>
      <div className='text-center'>
        <h2 className='text-2xl dark:text-white border-b-4 border-b-emerald-400 dark:border-b-emerald-600 font-bold inline-block mb-8 uppercase'>
          Educación
        </h2>
      </div>
      <div className='px-5 lg:px-0'>
        <Timeline data={listEducation} />
      </div>
    </div>
  )
}
