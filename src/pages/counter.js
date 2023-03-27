import React, { useEffect, useState } from "react";
import CountForm from "../components/CountForm";

function Counter(props) {
  // const x = [10, 20]
  // const [a, b] = [10, () => { }]
  const [count, setCount] = useState(0);

  // LIFECYCLE METHOD THAT RUN AFTER COMPONENT GETS RENDERED
  // RUNS ONLY FOR FIRST RENDER
  useEffect(() => {
    console.log("RENDERING");
  }, []);

  // RUNS WHENEVER THE VALUE REFERED IN THE DEPENDENCY ARRAY CHANGES
  useEffect(() => {
    console.log("EFFECT RUNING");
    if (count === 5) {
      alert(count);
    }
  }, [count]);

  function handleChange(e, type) {
    console.log(e, type);
    const id = e.target.id;
    if (id === "decrement" && count >= 1) setCount(count - 1);
    else if (id === "increment") setCount(count + 1);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="counter-container">
          <a href="#">Pricing</a>
          <CountForm count={count} handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
}

export default Counter;
