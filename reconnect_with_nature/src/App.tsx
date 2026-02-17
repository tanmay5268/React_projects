import './App.css'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
function App() {
  return (
    <div>
        <HeroSection></HeroSection>
        <Navbar></Navbar>
        <MainContent></MainContent>
        <Subscribe></Subscribe>
        <Footer></Footer>
    </div>

  )
}

export default App
