import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchBar from "./SearchBar";

const Nav = ({ setSearch }) => {
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
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <Link to="/home" style={{ display: "flex", alignItems: "center" }}>
              <ShowChartIcon sx={{ mr: 1 }} color="primary" />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  display: { xs: "none", md: "flex" },
                }}
              >
                MACRODATA
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <SearchBar setSearch={setSearch} />
            <Link to="/account">
              <AccountCircleIcon
                sx={{
                  mx: 1.5,
                  color: "white",
                  display: "block",
                  "&:hover": { color: "#6b73ff" },
                }}
              />
            </Link>
            <LogoutIcon
              onClick={handleLogout}
              sx={{
                color: "white",
                display: "block",
                "&:hover": { color: "#6b73ff", cursor: "pointer" },
              }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
