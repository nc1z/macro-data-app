import React from "react";

const TickerChart = ({ ticker }) => {
  return (
    <div>
      <div>{ticker.description}</div>
      <div>{ticker.ticker}</div>
    </div>
  );
};

export default TickerChart;
