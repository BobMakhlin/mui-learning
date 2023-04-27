import { Box, Stack } from "@mui/material";
import { useCallback } from "react";
import { useState } from "react";
import AddButton from "./UI/AddButton";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import AddPostModal from "./components/AddPostModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostAdd = useCallback(() => {
    setIsModalOpen(true);
  }, []);
  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <Box bgcolor="background.default" color="text.primary">
      <Navbar />
      <Stack direction="row" spacing={2}>
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Rightbar></Rightbar>
      </Stack>
      <AddButton onClick={handlePostAdd}></AddButton>
      <AddPostModal isOpen={isModalOpen} onClose={handleModalClose} />
    </Box>
  );
}

export default App;
