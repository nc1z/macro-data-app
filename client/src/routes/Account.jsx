import { Paper } from "@mui/material";
import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import TickerChart from "../components/TickerChart";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";

const Account = () => {
  const [watchlist, setWatchlist] = useState([]);
  const { user } = UserAuth();
  const dateTime = new Date(user.metadata?.lastLoginAt * 1);

  if (!user) {
    return <div>Not logged in</div>;
  }

  useEffect(() => {
    try {
      if (user?.email) {
        onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
          setWatchlist(doc.data().watchList);
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
        {watchlist?.map((ticker) => (
          <Paper
            sx={{
              padding: "0.5rem",
              background: "none",
              border: "1px solid var(--main-border-color)",
              borderRadius: "1rem",
              maxWidth: "80vw",
              margin: "0 auto",
            }}
            key={ticker.ticker}
          >
            {ticker.description}
          </Paper>
        ))}
      </div>
    </section>
  );
};

export default Account;
