import { Gradient } from './components/Header/Gradient'
import { Hero } from './components/Header/Hero'
import { Navbar } from './components/Header/Navbar'

function App () {
  return (
    <div className='h-screen row'>
      <Navbar />
      <Gradient />
      <Hero />
    </div>
  )
}

export default App
