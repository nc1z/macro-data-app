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
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setWatchlist(doc.data().watchList);
    });
  }, [user?.email]);

  return (
    <section>
      <div>Email: {user.email}</div>
      <div>Last Logged In: {dateTime.toString()}</div>
      <div>Watchlist:</div>
      {watchlist?.map((ticker) => (
        <Paper
          sx={{
            padding: "0.5rem",
            background: "none",
            border: "1px solid var(--main-border-color)",
            borderRadius: "1rem",
            maxWidth: "80vw",
          }}
          key={ticker.ticker}
        >
          {ticker.description}
        </Paper>
      ))}
    </section>
  );
};

export default Account;
