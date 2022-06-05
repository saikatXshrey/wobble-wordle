import * as React from "react";

import { Box, Button, Modal, Grid, Typography } from "@mui/material";
import { exportComponentAsPNG } from "react-component-export-image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "28%",
  bgcolor: "background.paper",
  border: "2px solid #000",
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
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => exportComponentAsPNG(boardRef)}
              >
                Snap
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Button fullWidth variant="contained">
                Share
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default WordleModal;
