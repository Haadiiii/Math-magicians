import React from "react";
import Calculator from "../Components/Calculator";

const CalculatorPage = () => {
  const centerContent = {
    display: "flex",
    color: "white",
    alignItems: "center",
  };
  return (
    <div className="math" style={centerContent}>
      <h1>lets Do some Magic</h1>
      <Calculator className="calculator" />
    </div>
  );
};

export default CalculatorPage;
