import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CloseIcon from '@material-ui/icons/Close';
const drawerWidth = '100%';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
   transition: theme.transitions.create(['margin', 'width'], {
     easing: theme.transitions.easing.sharp,
     duration: theme.transitions.duration.leavingScreen,
   }),
 },
 appBarShift: {
  width: '100%',
  marginLeft: drawerWidth,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
},
menuButton: {
  marginRight: theme.spacing(2),
},
hide: {
  display: 'none',
},
drawer: {
  width: drawerWidth,
  flexShrink: 0,
},
drawerPaper: {
  width: drawerWidth,
},
drawerHeader: {
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
},
content: {
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: -drawerWidth,
},
contentShift: {
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  marginLeft: 0,
},
}))


const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    return(
      <div className="nav-bar">
        <AppBar
          position="static"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              className={clsx(classes.menuButton, open && classes.hide)}
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
            </IconButton>
            <div className="date-details">
            <Typography className="wedding-date">
              June 12, 2021
            </Typography>
            <Typography className="wedding-location">
              Newport, Rhode Island
            </Typography>
            </div>
            <Typography className="title">
              Sarah & Anthony
            </Typography>
            <div className="links">
              <Typography className="link">
                <a href="#schedule">Schedule</a>
              </Typography>
              <Typography className="link">
                <a href="#registry">Registry</a>
              </Typography>
              <Typography className="link">
                <a href="#photos">Photos</a>
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          className={classes.drawer}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <CloseIcon /> : <CloseIcon />}
            </IconButton>
          </div>
          <List className="mobile-nav-list">
            <ListItem>
              <a href="#schedule">SCHEDULE</a>
            </ListItem>
            <ListItem>
              <a href="#registry">REGISTRY</a>
            </ListItem>
            <ListItem>
              <a href="#photos">PHOTOS</a>
            </ListItem>
          </List>
        </Drawer>
      </div>
    )
  }


export default NavBar;
