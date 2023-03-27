import React, { useState } from "react";
import "./App.css";
import Pricing from "./pages/pricing";
import Cart from "./pages/Cart";
import ContentPage from "./pages/Content";
import Counter from "./pages/counter";
// import Signin from "./pages/Signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// IMPORTING NEW PAGES
import Signin from "./NewPages/Signin";
import Signup from "./NewPages/Signup";
import Home from "./NewPages/home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signin" Component={Signin} />
          <Route path="/signup" Component={Signup} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// {
//   show ? (
//     <section className="pricing py-5">
//       {page === "counter" && <Counter />}
//       {page === "pricing" && <Pricing />}
//       {page === "cart" && <Cart />}
//       {page === "content" && <ContentPage />}
//       {page === "siginin" && <Signin />}
//     </section>
//   ) : (
//     <section className="pricing py-5">Nothing to show</section>
//   );
// }

// localhost: 3000 / signin - SIGNIN IN PAGE
// localhost: 3000 / signup - SIGNUP IN PAGE
// localhost: 3000 / home - HOME PAGE
