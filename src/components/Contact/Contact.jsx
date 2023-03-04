import { contactInfo } from '../../data/contact'
import { ContactItem } from './ContactItem'

export const Contact = () => {
  return (
    <div className='container mx-auto px-5 mb-72'>
      <div className='text-center'>
        <h2 className='text-2xl dark:text-white border-b-4 border-b-emerald-400 dark:border-b-emerald-600 font-bold inline-block mb-5 uppercase'>
          Trabajemos juntos
        </h2>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-6'>
        {contactInfo.map(info => (
          <ContactItem key={info.id} info={info} />
        ))}
      </div>
    </div>
  )
}
