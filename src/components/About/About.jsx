import { Education } from './Education'
import { Experience } from './Experience'
import { Skills } from './Skills'

export const About = () => {
  return (
    <>
      <div className='container mx-auto mb-16 md:mb-32'>
        <div className='lg:grid lg:grid-cols-3 lg:gap-16'>
          <Skills />
          <Education />
          <Experience />
        </div>
      </div>
    </>
  )
}
