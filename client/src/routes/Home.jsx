import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { UserAuth } from "../context/AuthContext";

const Home = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section>
      <Nav handleLogout={handleLogout} />
      <h1>Home</h1>
    </section>
  );
};

export default Home;
