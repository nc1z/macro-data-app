import { Paper } from "@mui/material";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import CloseIcon from "@mui/icons-material/Close";

const Account = () => {
  const [favorites, setFavorites] = useState([]);
  const { user } = UserAuth();
  const dateTime = new Date(user.metadata?.lastLoginAt * 1);
  const favPath = doc(db, "users", `${user?.email}`);

  const unfavorite = async (selectedTicker) => {
    try {
      const result = favorites.filter(
        (ticker) => ticker.ticker !== selectedTicker
      );
      await updateDoc(favPath, {
        watchList: result,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    try {
      if (user?.email) {
        onSnapshot(favPath, (doc) => {
          setFavorites(doc.data().watchList);
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [user?.email]);

  return (
    <section>
      <div>Email: {user.email}</div>
      <div>Last Logged In: {dateTime.toString()}</div>
      <div>Watchlist:</div>
      <div>
        {favorites?.map((ticker) => (
          <Paper
            sx={{
              padding: "0.5rem",
              background: "none",
              border: "1px solid var(--main-border-color)",
              borderRadius: "1rem",
              maxWidth: "80vw",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={ticker.ticker}
          >
            {ticker.description}
            <CloseIcon
              sx={{ "&:hover": { cursor: "pointer" } }}
              onClick={() => unfavorite(ticker.ticker)}
            />
          </Paper>
        ))}
      </div>
    </section>
  );
};

export default Account;
