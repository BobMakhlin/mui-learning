import { Button, Typography, styled } from "@mui/material";

function App() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: "#888",
    m: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  }));

  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button variant="contained" color="secondary">
        Settings
      </Button>
      <Button variant="outlined" color="success">
        Add new post
      </Button>
      <Typography variant="h1" component="p">
        It uses h1 style, but it's a p tag
      </Typography>
      <BlueButton disabled>My unique button</BlueButton>
      <BlueButton>Another button</BlueButton>
    </div>
  );
}

export default App;
