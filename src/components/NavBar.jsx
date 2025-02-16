import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import '../styles/Navbar.css';

// NavBar component that includes a search form to navigate to a search results page
const NavBar = () => {
  // State to manage the user's search query
  const [searchQuery, setSearchQuery] = useState("");
  // useNavigate hook to programmatically navigate on form submission
  const navigate = useNavigate();

  // Handle form submission and navigate to the search route if the query is not empty
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search/${searchQuery}`); 
    }
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Display the site/brand name */}
        <Typography variant="h6" component="div">
          Abdullah
        </Typography>

        {/* Search form with a text field and submit button */}
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
