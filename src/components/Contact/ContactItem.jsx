import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ContactItem = ({ info }) => {
  const { name, icon, link } = info

  return (
    <>
      <a href={link} target='_blank' rel='noreferrer'>
        <div className='bg-gray-50 dark:bg-gray-800 py-4 md:py-8 px-5 grid place-items-center rounded-md shadow dark:shadow-gray-700 hover:scale-105 transition-transform ease-in duration-200'>
          <div className='flex flex-col'>
            <FontAwesomeIcon icon={icon} className='text-emerald-500 text-4xl sm:text-5xl' />
            <span className='text-gray-800 dark:text-white mt-4'>{name}</span>
          </div>
        </div>
      </a>
    </>
  )
}
