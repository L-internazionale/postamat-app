import React from "react";
import MapComponent from "./components/MapComponent";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BasicCard from "./components/Card";


function App() {
  return (
	<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={8}>
			    <MapComponent/>
        </Grid>
        <Grid>
          <BasicCard/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App
