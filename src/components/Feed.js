import { Stack } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <Stack flex={4} p={2} gap={4} direction="column">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Stack>
  );
};

export default Feed;
