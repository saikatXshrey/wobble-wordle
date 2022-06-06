import React, { useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const WordleSnackBar = ({ open, message, color }) => {
  // state
  const [openSnackBar, setOpenSnackBar] = useState(open);

  return (
    <Snackbar
      open={openSnackBar}
      autoHideDuration={4000}
      onClose={() => setOpenSnackBar(false)}
    >
      <Alert
        onClose={() => setOpenSnackBar(false)}
        severity={color}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default WordleSnackBar;
