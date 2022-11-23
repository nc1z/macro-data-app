import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Home = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Home;
