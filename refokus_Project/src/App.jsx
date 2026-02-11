import Stripes from './components/Stripes'
import Work from './components/Work'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cards from './components/Cards'
import Marquees from './components/Marquees'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
    const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-full bg-zinc-900 text-white'>
      <Navbar></Navbar>
      <Work></Work>
      <Stripes></Stripes>
      <Products></Products>
      <Marquees></Marquees>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  )
}

export default App
