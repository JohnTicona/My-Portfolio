import { useEffect, useState } from 'react'

export const Navbar = () => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem('theme') || 'dark'
  )

  const onChangeMode = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    } else {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }
  }

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <nav className='sticky top-0 z-10  bg-white dark:bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-40 dark:bg-opacity-70 shadow-lg  py-1'>
      <div className='container mx-auto flex justify-between items-center h-16 px-5'>
        <span className='text-4xl text-gray-900 dark:text-white font-bold'>
          JT
        </span>
        <div className='flex items-center gap-6 dark:text-white text-base tracking-wide'>
          <a href='#home'>Inicio</a>
          <a href='#about'>Acerca de Mi</a>
          {/* <a href='#services'>Servicios</a> */}
          <a href='#portfolio'>Mis Proyectos</a>
          <a href='#contact'>Contáctame</a>
          <button onClick={onChangeMode} className='bg-indigo-600 text-white px-4 py-2 rounded-md font-bold'>dark</button>
        </div>
      </div>
    </nav>
  )
}
