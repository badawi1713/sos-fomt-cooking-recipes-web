import React from "react";
import { useStyles } from "../../../assets/helpers/DrawerTheme";

import { Box, Grid, Typography, CssBaseline, Zoom } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

import Navigation from "../../components/Navigation";

const RecipeList = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navigation pageTitle="Recipe List" props={props} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <section>
          <Grid container>
            <Grid item xs={12}>
              <Zoom in={true}>
                <Box
                  display="flex"
                  justifyContent="center"
                  justifyItems="center"
                  alignItems="center"
                  alignContent="center"
                  minHeight="100%"
                  flexDirection="column"
                >
                  <ErrorOutlineIcon
                    fontSize="large"
                    style={{ marginBottom: 20, color: "#757575" }}
                  />
                  <Typography
                    variant="h4"
                    component="h1"
                    style={{ color: "#757575" }}
                  >
                    Sorry this page is still under construction.
                  </Typography>
                </Box>
              </Zoom>
            </Grid>
          </Grid>
        </section>
      </main>
    </div>
  );
};

export default RecipeList;
