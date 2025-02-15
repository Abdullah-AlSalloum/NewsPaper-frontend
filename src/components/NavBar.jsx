import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";  // Use useNavigate instead of useHistory
import '../styles/Navbar.css';

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();  // Use useNavigate hook

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search/${searchQuery}`);  // Use navigate() to redirect
    }
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Abdullah
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <form onSubmit={handleSearch}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ background: "white", borderRadius: 1 }}
            />
            <Button type="submit" variant="contained" color="secondary">
              Search
            </Button>
          </form>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
