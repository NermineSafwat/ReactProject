import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './Pagecss.css';
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
  export default function NavBar() {
    const classes = useStyles();
  
    return (
      <div>
      </div> 
    );
  }
