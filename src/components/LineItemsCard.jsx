import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from "@material-ui/core";
import LineItems from './LineItems';

const useStyles = makeStyles({
    paper: {
        background: "#fef4ea",
        padding: 20,
        borderRadius: 10,
        margin:5,
    },
    image:{
      borderRadius: 5,
    }
  
  });

const LineItemsCard = ({orderOpened}) => {
const classes = useStyles();
console.log(orderOpened);

  return (
    <>
      <Paper className={classes.paper} >
        <Grid container>
          <Grid item xs={6}>
          <LineItems orderItems={orderOpened?.lineItems} />
          </Grid>
          <Grid item xs={6}>
          <img src={orderOpened.imageUrl} alt="Order" className={classes.image} />
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default LineItemsCard




