import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InfoIcon from "@mui/icons-material/Info";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  bgcolor: "background.paper",
  border: "1px solid var(--main-border-color)",
  borderRadius: "15px",
  p: 4,
  outline: "none",
};

const ChartModal = ({ ticker }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <InfoIcon onClick={handleOpen} fontSize="xs" />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {ticker.description} ({ticker.ticker})
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, display: "flex", flexDirection: "column" }}
          >
            <span>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </span>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ChartModal;
