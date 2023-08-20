import { Switcher } from './Switcher'

export const Navbar = () => {
  return (
    <nav className='fixed top-0 z-10 w-full bg-white dark:bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-40 dark:bg-opacity-70 shadow-lg  py-1'>
      <div className='container mx-auto flex justify-center sm:justify-between items-center px-5 h-16'>
        <span className='text-4xl text-gray-900 dark:text-white font-bold hidden sm:inline-block'>
          JT
        </span>
        <div className='flex items-center gap-4 sm:gap-5 dark:text-gray-200 text-sm sm:text-base tracking-wide'>
          <a href='#home'>Inicio</a>
          <a href='#about'>Sobre Mí</a>
          <a href='#projects'>Proyectos</a>
          {/* <a href='#services'>Servicios</a> */}
          <a href='#contact'>Contacto</a>
          <Switcher />
        </div>
      </div>
    </nav>
  )
}
