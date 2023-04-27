import { Fab, Tooltip } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const AddButton = ({onClick}) => {
  return (
    <Tooltip title="Add">
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "fixed",
          left: { xs: "calc(50%)", sm: 20 },
          transform: { xs: "translate(-50%, 0)", sm: "translate(0, 0)" },
          bottom: { xs: 5, sm: 20 },
        }}
        onClick={onClick}
      >
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};

export default AddButton;
