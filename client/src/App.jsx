import { Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./routes/Account";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signup from "./routes/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
}

export default App;
