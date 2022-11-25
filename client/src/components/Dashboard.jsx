import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Dashboard = ({ data }) => {
  if (!data) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      {data.map((ticker) => (
        <div key={ticker.ticker}>
          <div>{ticker.description}</div>
          <div>{ticker.ticker}</div>
        </div>
      ))}
    </>
  );
};

export default Dashboard;
