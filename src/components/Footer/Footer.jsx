const year = new Date().getFullYear()

export const Footer = () => {
  return (
    <div className='container mx-auto text-center px-5'>
      <p className='text-gray-800 dark:text-gray-400 text-base py-5 border-t border-emerald-400'>Todos los derechos reservados © {year}</p>
    </div>
  )
}
