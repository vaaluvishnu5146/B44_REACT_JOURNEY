import React, { useEffect, useState } from "react";

// function usestate() {
//     return [0, function () {
//         // do Something
//     }];
// }

function Counter(props) {
  // STATE
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("RENDERING");
  }, []);

  useEffect(() => {
    console.log("Count changed");
  }, [count]);

  (() => {
    console.log("IIFE");
  })();

  function handleChange(type) {
    if (type === "decrement" && count >= 1) setCount(count - 1);
    else if (type === "increment") setCount(count + 1);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="counter-container">
          <button
            className="counter-button"
            onClick={() => handleChange("decrement")}
          >
            -
          </button>
          <div style={{ width: 20 }}></div>
          <p id="counter-value" className="counter-text">
            {count}
          </p>
          <div style={{ width: 20 }}></div>
          <button
            className="counter-button"
            onClick={() => handleChange("increment")}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
