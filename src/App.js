import React from "react";
import "./App.css";
import Cart from "./pages/Cart";
import Counter from "./pages/counter";
import { Routes, Route } from "react-router-dom";

// IMPORTING NEW PAGES
import Signin from "./NewPages/Signin";
import Signup from "./NewPages/Signup";
import Home from "./NewPages/home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="signin" Component={Signin} />
        <Route path="signup" Component={Signup} />
        <Route path="home" Component={Home}>
          <Route path="cart" Component={Cart} />
          <Route path="counter" element={<Counter />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
