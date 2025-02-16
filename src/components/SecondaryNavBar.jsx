import React from "react";
import { AppBar, Toolbar, Button, Box, IconButton, Menu, MenuItem, Typography, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import '../styles/Navbar.css';

// Define the pages to be displayed in the navigation menu
const pages = [
  { name: "Home", path: "/" },
  { name: "Category", path: "/category" },
  { name: "About", path: "/about" }
];

function NavBar() {
  // State to manage the mobile menu anchor element
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // Get the current location to highlight the active menu item
  const location = useLocation();

  // Open mobile menu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // Close mobile menu
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Check if the current path matches the page path for active styling
  const isActive = (path) => location.pathname === path;

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile Menu (visible on extra small screens) */}
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
                      color: isActive(page.path) ? "blue" : "black"
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu (visible on medium and larger screens) */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{
                  my: 2,
                  color: isActive(page.path) ? "blue" : "white",
                  borderBottom: isActive(page.path) ? "2px solid blue" : "none",
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
