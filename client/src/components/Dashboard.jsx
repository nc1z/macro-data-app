import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import TickerChart from "./TickerChart";
import styled from "styled-components";

const ChartContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const Dashboard = ({ data }) => {
  if (!data) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <ChartContainer>
      {data.map((ticker) => (
        <TickerChart ticker={ticker} key={ticker.ticker} />
      ))}
    </ChartContainer>
  );
};

export default Dashboard;
