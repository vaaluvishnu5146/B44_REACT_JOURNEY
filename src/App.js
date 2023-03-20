import React, { useState } from "react";
import "./App.css";
import Counter from "./pages/counter";
import Pricing from "./pages/pricing";
import Cart from "./pages/Cart";

function App() {
  const [page, setPage] = useState("cart");
  return (
    <div className="App">
      <section className="pricing py-5">
        {page === "counter" && <Counter />}
        {page === "pricing" && <Pricing />}
        {page === "cart" && <Cart />}
      </section>
    </div>
  );
}

export default App;
