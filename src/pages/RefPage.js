import React, { useEffect, useRef } from "react";
import "./App.css";

/**
 * ADVANTAGES OF USING useRef
 * 1. GETTING RID OF STATE (COMPONENT STOPS UNWANMTED RE-RENDERING)
 * 2. WE CAN EASILY GET DATA FROM VITUAL DOM NODE (OCCUPYING MEMORY IS LESS)
 * WHATEVER WE CAN DO WITH DOM, ALSO CAN BE DONE USING useRef
 */

function RefPage() {
  // CREATED A FRESH INSTANCE FOR TEXT INPUT BOX
  const emailInputRef = useRef(); // CREATES EMAIL INPUT REFERENCE
  const nameInputRef = useRef(); // CREATES NAME INPUT REFERENCE

  function getText() {
    // const email = document.getElementById("email");
    console.log(emailInputRef, nameInputRef);
  }

  useEffect(() => {
    emailInputRef.current.focus();
    setInterval(() => {
      emailInputRef.current.style.background = "yellow";
    }, 5000);
    return () => {};
  }, [emailInputRef]);

  return (
    <div id="zen-landing-page-container" className="app-container">
      <input ref={emailInputRef} placeholder="Enter email" id="email" />
      <br />
      <input ref={nameInputRef} placeholder="Enter name" id="name" />
      <br />
      <button onClick={getText}>Submit</button>
    </div>
  );
}

export default RefPage;
