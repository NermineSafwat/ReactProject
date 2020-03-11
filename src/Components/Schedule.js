import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import './NavBarcss.css';
import TextField from '@material-ui/core/TextField';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
const useStyles = makeStyles(theme => ({

    root: {
      flexGrow: 1,
      backgroundColor:"WhiteSmoke"
    },
    Button:
    {
      backgroundColor:"#2E3B55",
      color:"white",
      textTransform: 'none',
      height: "50px",
      width:"80px",
      fontSize:15
      
    },
    title: {
      flexGrow: 1,
      fontWeight:600
    },
    ButtonIcon:{
      textTransform: 'none'
    },
  }));
  
  export default function Schedule() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
      setSelectedDate(date);
    };
 
  
    return (
<Card className={classes.root}>
      <CardContent>
      <div className='class1'>
        <h2>Find deals on hotels, homes, and much more...</h2>
        <p>From cozy country homes to funky city apartments</p>
       <div id="mydiv">
        <TextField variant="outlined"
        label="Where are you going"
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SingleBedIcon/>
            </InputAdornment>
          ),}}/>&nbsp;&nbsp;
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          
          variant="outlined"
          format="MM/dd/yyyy"
          id="date-picker-inline"
          label="From"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    </MuiPickersUtilsProvider>&nbsp;&nbsp;
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          
          variant="outlined"
          format="MM/dd/yyyy"
          id="date-picker-inline"
          label="To"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    </MuiPickersUtilsProvider>&nbsp;&nbsp;
    <Button className={classes.Button}  color="inherit">Search</Button>
    </div>
    <FormControlLabel 
        control={
          <Checkbox 
            color="primary"
          />
        }
        label="I'm traveling for work "
      />
    </div>
    </CardContent>
    </Card>
    );
  }
