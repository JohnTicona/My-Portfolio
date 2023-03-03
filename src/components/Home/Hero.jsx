import hero from '../../assets/hero.svg'

export const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center'>
      <div className='lg:h-5/6 container mx-auto flex flex-col-reverse justify-evenly lg:flex lg:flex-row lg:items-center px-5'>
        <div className='lg:w-2/5 mt-6 lg:mt-0'>
          <p className='text-lg font-light md:text-xl text-gray-800 dark:text-gray-200'>
            Hola👋, mi nombre es
          </p>
          <h1 className='text-4xl md:text-5xl lg:text-7xl text-gray-800 dark:text-white font-black mt-3 lg:mt-8'>
            John Ticona
            <span className='text-2xl md:text-4xl lg:text-5xl text-emerald-500 dark:text-emerald-400 block mt-1 md:mt-2 '>
              Full Stack Developer
            </span>
          </h1>
          <p className='text-base md:text-lg lg:text-xl text-gray-900 dark:text-gray-100 font-light mt-2 md:mt-8'>
            Soy una persona que le apasiona la tecnología, con muchas ganas de
            aprender, mejorar mis habilidades entonces que esperas 🚀
            <span className='font-bold'> ¡Trabajemos juntos!</span>
          </p>
          <button className='text-base md:text-lg text-gray-800 dark:text-white bg-transparent border border-black dark:border-slate-300 hover:text-white hover:bg-slate-800  dark:hover:bg-slate-800 font-semibold rounded-md transition px-4 py-2 mt-7 '>
            Mis proyectos
          </button>
        </div>
        <div className='lg:w-3/5 flex justify-center lg:justify-end mt-6 lg:mt-0'>
          <img
            className='w-full sm:w-4/5 md:w-3/5 lg:w-4/5'
            src={hero}
            alt='img'
          />
        </div>
      </div>
    </div>
  )
}
