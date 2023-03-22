import React, { useEffect, useState } from "react";
import CountForm from "../components/CountForm";

function Counter(props) {
  const [count, setCount] = useState(0);

  // LIFECYCLE THAT RUN AFTER COMPONENT GETS RENDERED
  useEffect(() => {
    console.log("RENDERING");
  }, []);

  useEffect(() => {
    // alert(count);
  }, [count]);

  function handleChange(e, type) {
    const id = e.target.id;
    console.log(id);
    if (id === "decrement" && count >= 1) setCount(count - 1);
    else if (id === "increment") setCount(count + 1);
  }
  return (
    <div className="container">
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>
      <div className="row">
        <div className="counter-container">
          <CountForm count={count} handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
}

export default Counter;
