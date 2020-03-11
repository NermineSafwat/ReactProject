import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import FlightIcon from '@material-ui/icons/Flight';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import './NavBarcss.css';
const useStyles = makeStyles(theme => ({

    root: {
      flexGrow: 1,
    },
    Button:
    {
      backgroundColor:"white",
      color:"black",
      textTransform: 'none'
    },
    title: {
      flexGrow: 1,
      fontWeight:650
    },
    ButtonIcon:{
      textTransform: 'none'
    },
  }));
  export default function NavBar() {
    const classes = useStyles();
  
    return (
      <Box>
      <div className={classes.root}>
        <AppBar style={{ background: '#2E3B55' }}position="static">
          <Toolbar>
          
            <Typography variant="h6" className={classes.title}>
              Booking.com
            </Typography>
          
            <Button className={classes.Button} color="inherit">Sign up</Button>
            <Button style={{ marginLeft: 20 }} className={classes.Button} color="inherit">Register</Button>
          </Toolbar>
        </AppBar>
      </div>

      <div className={classes.root}>
      <AppBar style={{ background: '#2E3B55' }}position="static">
        <Toolbar>
          <Button startIcon={<HomeWorkIcon />} className={classes.ButtonIcon}color="inherit">Stays</Button>&nbsp;&nbsp;
          <Button startIcon={<FlightIcon />} className={classes.ButtonIcon}  color="inherit">Flights</Button>&nbsp;&nbsp;
          <Button startIcon={<DriveEtaIcon />} className={classes.ButtonIcon}color="inherit">Car Rentals</Button>&nbsp;&nbsp;
          <Button startIcon={<SentimentVerySatisfiedIcon />} className={classes.ButtonIcon}  color="inherit">Attractions</Button>&nbsp;&nbsp;
          <Button startIcon={<LocalTaxiIcon />} className={classes.ButtonIcon}  color="inherit">Airport Taxi</Button>
        </Toolbar>
      </AppBar>
      </div>
</Box> 
    );
  }
