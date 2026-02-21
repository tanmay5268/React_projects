
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./pages/Preloader";
import Home from "./pages/Home";
import Transition from "./components/Transition";


function App() {

    return (
        <>
            <Preloader></Preloader>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/transition" element={<Transition />} />
                </Routes>
            </Router>
        </>

    );
}

export default App;
