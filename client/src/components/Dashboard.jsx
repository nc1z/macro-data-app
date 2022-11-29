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
  margin-bottom: 1rem;
`;

const Dashboard = ({ data, search }) => {
  if (!data) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <ChartContainer>
      {data
        .filter((ticker) => {
          if (search === "") {
            return ticker;
          } else if (
            ticker.ticker.toLowerCase().includes(search.toLowerCase()) ||
            ticker.description.toLowerCase().includes(search.toLowerCase())
          ) {
            return ticker;
          }
        })
        .map((ticker) => (
          <Paper
            sx={{
              padding: "0.5rem",
              background: "none",
              borderRadius: "1rem",
              maxWidth: "80vw",
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(5px)",
            }}
            key={ticker.ticker}
            elevation={3}
          >
            <TickerChart ticker={ticker} />
          </Paper>
        ))}
    </ChartContainer>
  );
};

export default Dashboard;
