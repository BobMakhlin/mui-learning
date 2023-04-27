import {
  Box,
  Button,
  ButtonGroup,
  Modal,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import UserAvatar from "../UI/UserAvatar";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DateRangeIcon from "@mui/icons-material/DateRange";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

function AddPostModal({ isOpen, onClose }) {
  return (
    <StyledModal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
        <Typography variant="h6" textAlign="center" color="gray">
          Create Post
        </Typography>
        <UserBox>
          <UserAvatar>AB</UserAvatar>
          <Typography variant="span" fontWeight={500}>
            Alex
          </Typography>
        </UserBox>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-multiline-static"
          multiline
          rows={3}
          variant="standard"
          placeholder="What's on your mind?"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
          <EmojiEmotionsIcon color="primary" />
          <ImageIcon color="secondary" />
          <VideoCameraBackIcon color="success" />
          <PersonAddIcon color="error" />
        </Stack>
        <ButtonGroup
          fullWidth
          variant="contained"
        >
          <Button>Post</Button>
          <Button sx={{ width: "25%" }}>
            <DateRangeIcon />
          </Button>
        </ButtonGroup>
      </Box>
    </StyledModal>
  );
}

export default AddPostModal;
