import React from "react";
import "./App.css";
import PasswordGenerator from "./PasswordGenerator";
function App() {
  return (
    <div className="App h-screen bg-linear-150 from-violet-500 to-fuchsia-500 ">
      <h1 className="text-5xl font-bold pt-16 text-white text-center  ">
        Password Generator
      </h1>
      <div className="bg-white lg:w-1/2 mx-auto mt-10 p-6 rounded-lg shadow-lg">
        <PasswordGenerator />
      </div>
    </div>
  );
}

export default App;
