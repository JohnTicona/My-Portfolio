import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ProjectItem = ({ project }) => {
  const { id, title, description, image, url, tools, github } = project
  return (
    <div className='lg:flex lg:items-center lg:even:flex-row-reverse lg:odd:flex-row lg:gap-10 mt-10 mb-20'>
      <div className='lg:w-3/6'>
        <div className='flex items-end gap-3  mb-5'>
          <h3 className='text-gray-900 dark:text-emerald-400 text-3xl sm:text-5xl font-bold tracking-tight'>
            {title}
          </h3>
          <a href={github} target='_blank' rel='noreferrer'>
            <FontAwesomeIcon
              icon={faGithub}
              className='text-gray-600 hover:text-emerald-500 dark:text-gray-200 text-4xl dark:hover:text-slate-400 transition-colors'
            />
          </a>
        </div>
        <p className='text-gray-500 dark:text-gray-400 text-base'>
          {description}
        </p>

        {id === 1 && (
          <div className='mt-2'>
            <p className='text-gray-500 dark:text-gray-400 text-base font-bold'>
              Email: <span className='font-normal'>emailprueba@correo.com</span>
            </p>
            <p className='text-gray-500 dark:text-gray-400 text-base font-bold'>
              Password: <span className='font-normal'>123456</span>
            </p>
          </div>
        )}

        <div className='flex flex-wrap gap-2 items-center mt-5'>
          {tools.map((tool) => (
            <span
              key={tool.id}
              className='bg-emerald-500 dark:bg-gray-800 px-2 py-1 rounded-md text-gray-200 dark:text-emerald-500  tracking-wide font-semibold'
            >
              {tool.tag}
            </span>
          ))}
        </div>

        <div className='flex items-center gap-5 mt-7 mb-8 lg:mb-0'>
          <a
            href={url}
            target='_blank'
            className='text-base text-gray-800 dark:text-white bg-transparent border border-black dark:border-slate-300 hover:text-white hover:bg-slate-800  dark:hover:bg-slate-800 rounded-md transition px-4 py-2 flex justify-center items-center gap-2 font-semibold'
            rel='noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244'
              />
            </svg>
            Ver proyecto
          </a>
        </div>
      </div>
      <div className='lg:w-3/6 rounded-lg overflow-hidden shadow-lg dark:shadow-md dark:shadow-gray-700'>
        <a href={url} target='_blank' rel='noreferrer'>
          <img src={image} alt={title} className='w-full' />
        </a>
      </div>
    </div>
  )
}
