import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useStyles } from "../../../assets/helpers/DrawerTheme";
import { useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Navigation = ({ pageTitle, props }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [dashboardActiveLink, setDashboardActiveLink] = useState(false);
  const [recipeListActiveLink, setRecipeListActiveLink] = useState(false);
  // const [addButtonActive, setAddButtonActive] = useState(false);
  const [settingActiveLink, setSettingActiveLink] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const { pathname } = props.history.location;
    if (pathname === "/") {
      setDashboardActiveLink(true);
      setRecipeListActiveLink(false);
      setSettingActiveLink(false);
    } else if (pathname === "/recipe-list") {
      setDashboardActiveLink(false);
      setRecipeListActiveLink(true);
      setSettingActiveLink(false);
    } else if (pathname === "/setting") {
      setDashboardActiveLink(false);
      setRecipeListActiveLink(false);
      setSettingActiveLink(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const topSideNavigation = [
    {
      title: "Dashboard",
      icon: <DashboardIcon />,
      link: "/",
      activeLink: dashboardActiveLink,
    },
    {
      title: "Recipe List",
      icon: <ListAltIcon />,
      link: "/recipe-list",
      activeLink: recipeListActiveLink,
    },
    {
      title: "Add Recipe",
      icon: <AddCircleIcon />,
      link: "",
      activeLink: false,
    },
  ];

  const bottomSideNavigation = [
    {
      title: "Setting",
      icon: <SettingsIcon />,
      link: "setting",
      activeLink: settingActiveLink,
    },
    {
      title: "Logout",
      icon: <ExitToAppIcon />,
      link: "/login",
      activeLink: false,
    },
  ];

  return (
    <div>
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
            {pageTitle}
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
          {topSideNavigation.map((item, index) =>
            index === 2 ? (
              <div key={index}>
                <ListItem button>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              </div>
            ) : (
              <Link
                style={{ color: item.activeLink ? "#3F51B5" : "inherit" }}
                to={item.link}
                key={index}
              >
                <ListItem button>
                  <ListItemIcon
                    style={{ color: item.activeLink ? "#3F51B5" : "" }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              </Link>
            )
          )}
        </List>
        <Divider />
        <List>
          {bottomSideNavigation.map((item, index) => (
            <Link
              style={{ color: item.activeLink ? "#3F51B5" : "inherit" }}
              to={item.link}
              key={index}
            >
              <ListItem button>
                <ListItemIcon
                  style={{ color: item.activeLink ? "#3F51B5" : "" }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Navigation;
