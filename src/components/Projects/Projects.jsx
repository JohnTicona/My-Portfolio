import { projectsData } from '../../data/projects'
import { ProjectItem } from './ProjectItem'

export const Projects = () => {
  return (
    <main id='projects' className='pt-20 md:pt-32'>
      <div className='container mx-auto px-5'>
        <div className='text-center'>
          <h2 className='text-2xl dark:text-white border-b-4 border-b-emerald-400 dark:border-b-emerald-600 font-bold inline-block lg:mb-5 uppercase'>
            Mis proyectos
          </h2>
        </div>

        <div>
          {projectsData.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  )
}
