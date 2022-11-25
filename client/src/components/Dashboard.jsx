import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import TickerChart from "./TickerChart";

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
        <TickerChart ticker={ticker} key={ticker.ticker} />
      ))}
    </>
  );
};

export default Dashboard;
