import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)({
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LOGO
        </Typography>
        <LogoDevIcon
          sx={{ display: { xs: "block", sm: "none" } }}
        ></LogoDevIcon>
        <Search>
          <InputBase sx={{ width: "100%" }} placeholder="search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <EmailIcon></EmailIcon>
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon></NotificationsIcon>
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }}>AB</Avatar>
        </Icons>
        <UserBox>
          <Avatar sx={{ width: 30, height: 30 }}>AB</Avatar>
          <Typography variant="span">Alex</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
