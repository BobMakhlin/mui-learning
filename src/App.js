import { Button, Typography } from "@mui/material";

function App() {
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
      <Button
        variant="contained"
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          m: 5,
          "&:hover": {
            backgroundColor: "lightblue",
          },
          "&:disabled": {
            backgroundColor: "gray",
            color: "white",
          },
        }}
        disabled
      >
        My unique button
      </Button>
    </div>
  );
}

export default App;
