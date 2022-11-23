import React from "react";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const { user } = UserAuth();
  const dateTime = new Date(user.metadata?.lastLoginAt * 1);

  if (!user) {
    return <div>Not logged in</div>;
  }

  return (
    <section>
      <div>Email: {user.email}</div>
      <div>Last Logged In: {dateTime.toString()}</div>
      <div>Watchlist:</div>
    </section>
  );
};

export default Account;
