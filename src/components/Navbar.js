import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import LogoDevIcon from "@mui/icons-material/LogoDev";

const StyledToolbar = styled(Toolbar)({
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));
const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
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
        <Search>search</Search>
        <Icons>icons</Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
