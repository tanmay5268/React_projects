import Stripes from './components/Stripes'
import Work from './components/Work'
import Navbar from './components/Navbar'
import Products from './components/Products'
const App = () => {
  return (
    <div className='w-full h-full bg-zinc-900 text-white'>
      <Navbar></Navbar>
      <Work></Work>
      <Stripes></Stripes>
      <Products></Products>
    </div>
  )
}

export default App
