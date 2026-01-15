import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div
      style={{ backgroundColor: "#FAC5C5" }}
      className="w-screen absolute h-screen "
    >
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
}

export default App;
