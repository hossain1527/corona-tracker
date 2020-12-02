import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";


function Cards() {
  return (
   <React.Fragment>
   {/* <div className="container"> */}
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              New Confirmed
            </Typography>
            <Typography variant="h5" gutterBottom>Real Data</Typography>
            <Typography color="textSecondary">Reat Date</Typography>
            <Typography variant="body2">Reat Date</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Confirmed
            </Typography>
            <Typography variant="h5" gutterBottom>Real Data</Typography>
            <Typography color="textSecondary">Reat Date</Typography>
            <Typography variant="body2">Reat Date</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              New Recovered
            </Typography>
            <Typography variant="h5" gutterBottom>Real Data</Typography>
            <Typography color="textSecondary">Reat Date</Typography>
            <Typography variant="body2">Reat Date</Typography>
          </CardContent>
        </Grid>
        </Grid>
      
      


      <Grid container spacing={3} justify="center" paddingTop={2}>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Recovered
            </Typography>
            <Typography variant="h5">
              Real Data
            </Typography>
            <Typography color="textSecondary">Reat Date</Typography>
            <Typography variant="body2">Reat Date</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              New Deaths
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary">Reat Date</Typography>
            <Typography variant="body2">Reat Date</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Deaths
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary">Reat Date</Typography>
            <Typography variant="body2">Reat Date</Typography>
          </CardContent>
        </Grid>
        </Grid>
      
    
    </React.Fragment>
  );
}

export default Cards;
