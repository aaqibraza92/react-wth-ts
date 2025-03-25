import React, { useState } from "react";
import { Modal, Box, Button, Typography, Backdrop, Fade } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const HeaderMobile: React.FC=()=>{
  const [open, setOpen] = useState<boolean>(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  
    const handleClose = (
        event: React.SyntheticEvent | {}, 
        reason?: "backdropClick" | "escapeKeyDown"
      ) => {
        if (reason === "backdropClick") {
          return; // Prevent closing when clicking outside
        }
        setOpen(false); // Allow closing via other means (e.g., button)
      };
return (<>
     <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>

        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <Box sx={{ paddingTop: "10px", paddingRight: "10px" }} display="flex" justifyContent="flex-end">
            <svg
              style={{ cursor: "pointer" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </Box>

          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

        </Box>
      </Drawer>

 {/* <Button variant="contained" onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80vw",
              maxWidth: "600px",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography variant="h5" gutterBottom>
              Non-Closable Modal on Outside Click
            </Typography>
            <Typography>The modal will only close via the close button.</Typography>
            <Button onClick={() => setOpen(false)} sx={{ mt: 2 }} variant="contained">
              Close
            </Button>
          </Box>
        </Fade>
      </Modal> */}
</>)
}

export default HeaderMobile