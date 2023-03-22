import React from "react";

function ContentC(props) {
  var x = 10;
  const { heading = "", description = "" } = props;
  return (
    <>
      <h1>{heading}</h1>
      <p>{x}</p>
      <p>{description}</p>
    </>
  );
}

export default ContentC;
