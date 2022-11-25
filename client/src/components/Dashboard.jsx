import React, { useState } from "react";

const Dashboard = ({ data }) => {
  return (
    <>
      {data?.map((ticker, idx) => (
        <div>
          <div>{ticker.description}</div>
          <div>{ticker.ticker}</div>
        </div>
      ))}
    </>
  );
};

export default Dashboard;
