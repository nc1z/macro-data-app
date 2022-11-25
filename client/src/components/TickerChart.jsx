import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip);

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
      <div>{ticker.ticker}</div>
      <Line options={options} data={data} />
    </div>
  );
};

export default TickerChart;
