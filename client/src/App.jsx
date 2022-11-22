import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./routes/Account";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signup from "./routes/Signup";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#6b73ff",
      },
      secondary: {
        main: "#6b73ff",
      },
    },
    typography: {
      fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
      fontWeightLight: 200,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              setEmail={setEmail}
              setPassword={setPassword}
              handleSubmit={handleSubmit}
              theme={theme}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              setEmail={setEmail}
              setPassword={setPassword}
              handleSubmit={handleSubmit}
              theme={theme}
            />
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
