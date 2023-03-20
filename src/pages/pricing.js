import React from "react";
import Card from "../components/PricingCard";

function Pricing(props) {
  return (
    <div className="container">
      <div className="row">
        <Card price={10} />
        <Card price={20} />
        <Card price={30} />
        <Card price={40} />
      </div>
    </div>
  );
}

export default Pricing;
