import { Gradient } from './Gradient'
import { Hero } from './Hero'
import { Navbar } from './Navbar'

export const Home = () => {
  return (
    <div id='home'>
      <Navbar />
      <Gradient />
      <Hero />
    </div>
  )
}
