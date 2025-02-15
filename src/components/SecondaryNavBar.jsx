import React from "react";
import { AppBar, Toolbar, Button, Box, IconButton, Menu, MenuItem, Typography, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import '../styles/Navbar.css';

const pages = [
  { name: "Home", path: "/" },
  { name: "Category", path: "/category" },
  { name: "About", path: "/about" }
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation(); // Get the current location

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Function to check if the current path matches the page's path
  const isActive = (path) => location.pathname === path;

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              className="menupages"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    component={Link}
                    to={page.path}
                    sx={{
                      textDecoration: "none",
                      color: isActive(page.path) ? "blue" : "black" // Highlight active link
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{
                  my: 2,
                  color: isActive(page.path) ? "blue" : "white", // Highlight active button
                  borderBottom: isActive(page.path) ? "2px solid blue" : "none", // Optional underline
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
