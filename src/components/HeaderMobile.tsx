import React, { useState } from "react";
import { Modal, Box, Button, Typography, Backdrop, Fade } from "@mui/material";

const HeaderMobile: React.FC=()=>{
    const [open, setOpen] = useState(false);

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
 <Button variant="contained" onClick={() => setOpen(true)}>
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
      </Modal>
</>)
}

export default HeaderMobile