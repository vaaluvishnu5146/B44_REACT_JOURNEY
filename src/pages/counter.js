import React, { useEffect, useState, useReducer } from "react";
import CountForm from "../components/CountForm";

function Counter(props) {
  const [x, y] = useState(0);
  const [state, dispatch] = useReducer((initialState, action) => {
    console.log(action);
    switch (action.type) {
      case "add":
        initialState = action.payload;
        break;
      case "reset":
        initialState = 0;
        break;
      default:
        initialState = action.payload;
        break;
    }
    return initialState;
  }, 0);

  // RUNS WHENEVER THE VALUE REFERED IN THE DEPENDENCY ARRAY CHANGES
  // useEffect(() => {
  //   console.log("EFFECT RUNING");
  //   if (count === 5) {
  //     alert(count);
  //   }
  // }, [count]);

  // function handleChange(e, type) {
  //   console.log(e, type);
  //   const id = e.target.id;
  //   if (id === "decrement" && count >= 1) setCount(count - 1);
  //   else if (id === "increment") setCount(count + 1);
  // }
  return (
    <div className="container">
      <div className="row">
        <div className="counter-container">
          <a href="#">Pricing</a>
          <CountForm count={state} handleChange={dispatch} />
        </div>
      </div>
    </div>
  );
}

export default Counter;
