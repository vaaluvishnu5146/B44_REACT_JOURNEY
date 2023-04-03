import React from "react";
/*

VANILA JAVASCRIPT WAY OF ATTCHING AND HANDLING EVENTS:

const element = document.getElementById("increment");
element.addEventListener("click", (e) => {
  console.log("Here", e);
});

*/

function CountForm({ count = 0, handleChange = (action, paylaod) => {} }) {
  return (
    <div>
      <button
        id="decrement"
        className="counter-button"
        onClick={(e) => handleChange({ type: "minus", payload: count - 1 })}
      >
        -
      </button>
      <div style={{ width: 20 }}></div>
      <p id="counter-value" className="counter-text">
        {count}
      </p>
      <div style={{ width: 20 }}></div>
      <button
        id="increment"
        className="counter-button"
        onClick={(e) => handleChange({ type: "add", payload: count + 1 })}
      >
        +
      </button>
      <button
        id="increment"
        className="counter-button"
        onClick={(e) => handleChange({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
}

export default CountForm;
