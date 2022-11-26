import React, { useState } from "react";
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
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";

const ModalDiv = styled.div`
  display: flex;
  gap: 0.3rem;
  justify-content: center;
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
  const [favorite, setFavorite] = useState(false);
  const { user } = UserAuth();

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

  const handleFavorite = async () => {
    const favPath = doc(db, "users", `${user?.email}`);
    if (user?.email) {
      setFavorite(!favorite);
      await updateDoc(favPath, {
        watchList: arrayUnion(ticker),
      });
    } else {
      alert("Please sign in.");
    }
  };

  const FavoriteIcon = () => {
    if (favorite) {
      return (
        <StarIcon
          fontSize="xs"
          sx={{ "&:hover": { cursor: "pointer" } }}
          onClick={handleFavorite}
        />
      );
    }
    return (
      <StarBorderIcon
        fontSize="xs"
        sx={{ "&:hover": { cursor: "pointer" } }}
        onClick={handleFavorite}
      />
    );
  };

  return (
    <div>
      <div>
        {ticker.description} <FavoriteIcon />
      </div>
      <ModalDiv>
        <div>{ticker.ticker}</div>
        <ChartModal ticker={ticker} />
      </ModalDiv>
      <Line options={options} data={data} />
    </div>
  );
};

export default TickerChart;
