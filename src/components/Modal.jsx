import * as React from "react";

import { Box, Modal, IconButton, Grid, Typography } from "@mui/material";
import { exportComponentAsPNG } from "react-component-export-image";

// icons
import RedoIcon from "@mui/icons-material/Redo";
import CameraIcon from "@mui/icons-material/Camera";
import ShareIcon from "@mui/icons-material/Share";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  height: "25%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

const WordleModal = ({
  openModal,
  setOpenModal,
  solution,
  turn,
  boardRef,
  isCorrect,
}) => {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {isCorrect ? "Congrats, You Won!🎉" : "Opps!"}
          </Typography>
          <br />
          <Typography
            variant="modal-modal-description"
            style={{ textTransform: "uppercase", color: "red" }}
          >
            {solution}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {isCorrect
              ? `You found the solution in : ${turn} guesses`
              : ` You are out of turn😑`}
          </Typography>

          <Grid container pt={2} spacing={2}>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <IconButton
                color="warning"
                onClick={() => exportComponentAsPNG(boardRef)}
              >
                <CameraIcon />
              </IconButton>
            </Grid>

            <Grid item xs={4} sm={4} md={4} lg={4}>
              <IconButton
                color="error"
                onClick={() => window.location.reload()}
              >
                <RedoIcon />
              </IconButton>
            </Grid>

            <Grid item xs={4} sm={4} md={4} lg={4}>
              <IconButton
                color="primary"
                onClick={() =>
                  navigator.clipboard.writeText(window.location.href)
                }
              >
                <ShareIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default WordleModal;
