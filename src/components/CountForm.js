import React from "react";
/*

VANILA JAVASCRIPT WAY OF ATTCHING AND HANDLING EVENTS:

const element = document.getElementById("increment");
element.addEventListener("click", (e) => {
  console.log("Here", e);
});

*/

function CountForm({ count = 0, handleChange = (e, type) => {} }) {
  return (
    <div>
      <button
        id="decrement"
        className="counter-button"
        onClick={(e) => handleChange(e, "children to parent")}
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
        onClick={(e) => handleChange(e, "children to parent")}
      >
        +
      </button>
    </div>
  );
}

export default CountForm;
