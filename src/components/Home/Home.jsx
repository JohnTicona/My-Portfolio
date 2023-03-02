import { Gradient } from './Gradient'
import { Hero } from './Hero'
import { Navbar } from './Navbar'

export const Home = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <Gradient />
      <Hero />
    </div>
  )
}
