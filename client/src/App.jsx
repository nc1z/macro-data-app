import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";
import Account from "./routes/Account";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, login, handleError } = UserAuth();
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
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      handleError(error.message);
      console.log(error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      handleError(error.message);
      console.log(error.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              setEmail={setEmail}
              setPassword={setPassword}
              handleSubmit={handleLogin}
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
              handleSubmit={handleSignUp}
              theme={theme}
            />
          }
        />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/account" element={<ProtectedRoute />}>
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
