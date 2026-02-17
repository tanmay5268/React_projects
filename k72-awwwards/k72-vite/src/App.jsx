import './App.css'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import Aboutus from './pages/Aboutus'
function App() {

  return (
    <div className="App bg-[#221C24]">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
    </div>
  )
}

export default App
