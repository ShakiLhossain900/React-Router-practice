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
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
