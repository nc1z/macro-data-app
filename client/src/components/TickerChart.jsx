import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ChartModal from "./ChartModal";
import styled from "styled-components";

const ModalDiv = styled.div`
  display: flex;
  gap: 0.3rem;
  justify-content: center;
  align-items: center;
`;

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
);

const TickerChart = ({ ticker }) => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels: ticker.data.dates,
    datasets: [
      {
        label: "Dataset",
        data: ticker.data.values,
        borderColor: "#6b73ff",
        borderWidth: 1,
        showLine: true,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div>
      <div>{ticker.description}</div>
      <ModalDiv>
        <div>{ticker.ticker}</div>
        <ChartModal />
      </ModalDiv>
      <Line options={options} data={data} />
    </div>
  );
};

export default TickerChart;
