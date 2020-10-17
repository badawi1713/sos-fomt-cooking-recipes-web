import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { useStyles } from "../../../assets/helpers/DrawerTheme";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Box, Grid } from "@material-ui/core";

import HomeTable from "../../components/Table";

const Login = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [currentTimeBackground, setCurrentTimeBackground] = useState("");
  const [morning, setMorning] = useState(false);

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
    } else if (today.getHours() >= 15 && today.getHours() < 18) {
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
  }, [currentDate, currentTime]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const topSideNavigation = [
    { title: "Dashboard", icon: <DashboardIcon /> },
    { title: "Recipe List", icon: <ListAltIcon /> },
    { title: "Add Recipe", icon: <AddCircleIcon /> },
  ];

  const bottomSideNavigation = [
    { title: "Settings", icon: <SettingsIcon /> },
    { title: "Logout", icon: <ExitToAppIcon /> },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {topSideNavigation.map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {bottomSideNavigation.map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <section>
          <Grid spacing={4} container>
            <Grid item xs={12} md={6} lg={3}>
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
                >
                  Registered Recipes Data Count
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
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
                >
                  Unregistered Recipes Data Count
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
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
                >
                  Current Location Temperature
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
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
                <Typography
                  variant="h6"
                  component="h1"
                  style={morning ? { color: "#3f51b5" } : { color: "#fff" }}
                >
                  {currentDate}
                </Typography>
                <Typography
                  variant="h6"
                  component="h1"
                  style={morning ? { color: "#3f51b5" } : { color: "#fff" }}
                >
                  {currentTime}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box marginBottom={1}>
                <Typography variant="h5" component="h1">
                  5 Latest Recipes Data
                </Typography>
              </Box>
              <Box>
                <HomeTable />
              </Box>
            </Grid>
          </Grid>
        </section>
      </main>
    </div>
  );
};

export default Login;
