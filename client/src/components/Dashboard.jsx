import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import TickerChart from "./TickerChart";
import styled from "styled-components";
import { Paper } from "@mui/material";

const ChartContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
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
        <Paper
          sx={{
            padding: "0.5rem",
            background: "none",
            border: "1px solid var(--main-border-color)",
            borderRadius: "1rem",
          }}
        >
          <TickerChart ticker={ticker} key={ticker.ticker} />
        </Paper>
      ))}
    </ChartContainer>
  );
};

export default Dashboard;
