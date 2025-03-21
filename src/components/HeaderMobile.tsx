import React, { useState } from "react";
import { Modal, Box, Button, Typography, Fade,Backdrop } from "@mui/material";

const HeaderMobile: React.FC=()=>{
    const [open, setOpen] = useState(false);
return (<>
    <Button variant="contained" onClick={() => setOpen(true)}>
        Open Smooth Modal
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500, // Smooth transition for backdrop
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
              maxWidth: "900px",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              transition: "all 0.4s ease-in-out", // Smooth scaling effect
            }}
          >
            <Typography variant="h5" gutterBottom>
              Smooth Transition Modal
            </Typography>
            <Typography>This modal has a fade effect and backdrop transition.</Typography>
            <Button onClick={() => setOpen(false)} sx={{ mt: 2 }} variant="outlined">
              Close
            </Button>
          </Box>
        </Fade>
      </Modal>
</>)
}

export default HeaderMobile