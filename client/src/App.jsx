import { createTheme } from "@mui/material";
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
  const theme = createTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
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
  );
}

export default App;
