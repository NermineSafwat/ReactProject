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
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
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
    <div className='class1'>
        <h2>
        Find deals on hotels, homes, and much more... 
        </h2>
        <p>
        From cozy country homes to funky city apartments 
        </p>
       
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
          label="Date"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    </MuiPickersUtilsProvider>
    </div>
    );
  }
