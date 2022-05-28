import About from "./About";
import React from "react";
import "./App.css";
import Nav from "./Nav";
import Shop from "./Shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default App;
