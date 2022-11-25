import "./App.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";
import Account from "./routes/Account";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Nav from "./components/Nav";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, login, handleError, user } = UserAuth();
  const navigate = useNavigate();
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
    breakpoints: {
      values: {
        xs: 0,
        sm: 300,
        md: 431,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/home");
      handleError("");
    } catch (error) {
      handleError(error.message);
      console.log(error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/home");
      handleError("");
    } catch (error) {
      handleError(error.message);
      console.log(error.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {user ? <Nav /> : null}
      <Routes>
        <Route
          path="/"
          element={
            <Login
              setEmail={setEmail}
              setPassword={setPassword}
              handleSubmit={handleLogin}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              setEmail={setEmail}
              setPassword={setPassword}
              handleSubmit={handleSignUp}
            />
          }
        />
        <Route path="/home" element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/account" element={<ProtectedRoute />}>
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
