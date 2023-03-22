import React, { useState } from "react";
import "./App.css";
import "./Assets/css/sb-admin-2.min.css";
import Pricing from "./pages/pricing";
import Cart from "./pages/Cart";
import ContentPage from "./pages/Content";
import Counter from "./pages/counter";
import Signin from "./pages/Signin";

function App() {
  const [page, setPage] = useState("counter");
  var show = true;

  return (
    <div className="App">
      {show ? (
        <section className="pricing py-5">
          {page === "counter" && <Counter />}
          {page === "pricing" && <Pricing />}
          {page === "cart" && <Cart />}
          {page === "content" && <ContentPage />}
          {page === "siginin" && <Signin />}
        </section>
      ) : (
        <section className="pricing py-5">Nothing to show</section>
      )}
    </div>
  );
}

export default App;
