import React, { useState, useEffect } from "react";
import { useStyles } from "../../../assets/helpers/DrawerTheme";

import { Box, Grid, Typography, CssBaseline, Zoom } from "@material-ui/core";

import Navigation from "../../components/Navigation";
import HomeTable from "../../components/Table";

const Home = (props) => {
  const classes = useStyles();

  const [currentDate, setCurrentDate] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [currentTimeBackground, setCurrentTimeBackground] = useState(null);
  const [morning, setMorning] = useState(false);

  const today = new Date();
  const date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  const time =
    (today.getHours() < 10 ? "0" : "") +
    today.getHours() +
    ":" +
    ((today.getMinutes() < 10 ? "0" : "") + today.getMinutes()) +
    ":" +
    ((today.getSeconds() < 10 ? "0" : "") + today.getSeconds());

  useEffect(() => {
    const today = new Date();
    const date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    const time =
      (today.getHours() < 10 ? "0" : "") +
      today.getHours() +
      ":" +
      ((today.getMinutes() < 10 ? "0" : "") + today.getMinutes()) +
      ":" +
      ((today.getSeconds() < 10 ? "0" : "") + today.getSeconds());

    if (today.getHours() >= 6 && today.getHours() < 15) {
      setCurrentTimeBackground(
        "https://primeprefer.com/wp-content/uploads/2020/05/morning-1.jpg"
      );
      setMorning(true);
    } else if (today.getHours() >= 15 && today.getHours() < 19) {
      setCurrentTimeBackground(
        "https://theshoutnetwork.com/wp-content/uploads/2020/05/pine-forest-landscape-evening-sunset-with-mountain-sky-illustration_105940-381.jpg"
      );
      setMorning(false);
    } else {
      setCurrentTimeBackground(
        "https://img.favpng.com/18/16/7/moonlight-sky-night-illustration-png-favpng-CBBSyFZCgC7xT6ParVbiqwZyi.jpg"
      );
      setMorning(false);
    }

    const timeInterval = setInterval(() => {
      setCurrentDate(date);
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(timeInterval);
  }, [currentTime, currentTimeBackground, currentDate]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navigation pageTitle="Dashboard" props={props} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <section>
          <Grid spacing={4} container>
            <Grid item xs={12} md={6} lg={3}>
              <Zoom in={true} style={{ transitionDelay: "0ms" }}>
                <Box
                  borderRadius={10}
                  height={140}
                  style={{ backgroundColor: "#3F51B5" }}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography
                    variant="h6"
                    component="h1"
                    style={{ color: "#fff" }}
                    align="center"
                  >
                    Registered Recipes Data
                    <br />
                    (will be create)
                  </Typography>
                </Box>
              </Zoom>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Zoom in={true} style={{ transitionDelay: "200ms" }}>
                <Box
                  borderRadius={10}
                  height={140}
                  style={{ backgroundColor: "#3F51B5" }}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography
                    variant="h6"
                    component="h1"
                    style={{ color: "#fff" }}
                    align="center"
                  >
                    Unregistered Recipes Data
                    <br />
                    (will be create)
                  </Typography>
                </Box>
              </Zoom>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Zoom in={true} style={{ transitionDelay: "400ms" }}>
                <Box
                  borderRadius={10}
                  height={140}
                  style={{ backgroundColor: "#3F51B5" }}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography
                    variant="h6"
                    component="h1"
                    style={{ color: "#fff" }}
                    align="center"
                  >
                    Current Location Temperature
                    <br />
                    (will be create)
                  </Typography>
                </Box>
              </Zoom>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Zoom in={true} style={{ transitionDelay: "600ms" }}>
                <Box
                  borderRadius={10}
                  height={140}
                  style={{
                    backgroundImage: `url(${currentTimeBackground})`,
                    backgroundSize: "cover",
                  }}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Zoom in={true}>
                    <Typography
                      variant="h6"
                      component="h1"
                      style={morning ? { color: "#3f51b5" } : { color: "#fff" }}
                    >
                      {!currentDate ? date : currentDate}
                    </Typography>
                  </Zoom>
                  <Zoom in={true}>
                    <Typography
                      variant="h6"
                      component="h1"
                      style={morning ? { color: "#3f51b5" } : { color: "#fff" }}
                    >
                      {!currentTime ? time : currentTime}
                    </Typography>
                  </Zoom>
                </Box>
              </Zoom>
            </Grid>
            <Grid item xs={12}>
              <Zoom in={true} style={{ transitionDelay: "1000ms" }}>
                <Box marginBottom={1}>
                  <Typography variant="h5" component="h1">
                    5 Latest Recipes List (still using dummy data)
                  </Typography>
                </Box>
              </Zoom>
              <Zoom in={true} style={{ transitionDelay: "1000ms" }}>
                <Box>
                  <HomeTable />
                </Box>
              </Zoom>
            </Grid>
          </Grid>
        </section>
      </main>
    </div>
  );
};

export default Home;
