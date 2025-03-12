import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material"
import { useState } from "react";

const Header:React.FC=()=>{
    const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle mobile menu
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
return(
    <>
    {/* Top Navigation Bar */}
    <AppBar position="static">
      <Toolbar>
        {/* Mobile Menu Icon */}
        <IconButton edge="start" color="inherit" onClick={handleDrawerToggle} sx={{ display: { xs: "block", md: "none" } }}>
          Mobile
        </IconButton>

        {/* Website Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Typography variant="button">Home</Typography>
          <Typography variant="button">About</Typography>
          <Typography variant="button">Services</Typography>
          <Typography variant="button">Contact</Typography>
        </Box>
      </Toolbar>
    </AppBar>

    {/* Mobile Menu Drawer */}
    <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
      <Box sx={{ width: 250 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ m: 1 }}>
          Close
        </IconButton>
        <List>
          {["Home", "About", "Services", "Contact"].map((text, index) => (
            <li key={index} onClick={handleDrawerToggle}>
              <ListItemText primary={text} />
            </li>
          ))}
        </List>
      </Box>
    </Drawer>
  </>
)
}

export default Header