import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <Box
      flex={4}
      p={2}
      sx={{ display: "flex", flexDirection: "column", gap: 4 }}
    >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
