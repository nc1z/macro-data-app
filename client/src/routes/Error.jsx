import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <h3>Page does not exist</h3>
      <Link to="/">
        <Button
          sx={{
            border: "1px solid var(--main-border-color)",
            borderRadius: "15px",
          }}
        >
          return home
        </Button>
      </Link>
    </div>
  );
};

export default Error;
