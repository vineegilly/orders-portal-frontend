import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from "@material-ui/core";
import LineItems from './LineItems';

const useStyles = makeStyles({
    paper: {
        background: "#fef4ea",
        padding: 3,
        borderRadius: 5,
        margin:10
    }
  
  });

const LineItemsCard = ({orderOpened}) => {
const classes = useStyles();
console.log(orderOpened);

  return (
    <Grid item>
      <Paper className={classes.paper}>
      <Grid container spacing={10}>
          <Grid item alignContent="flex-start">
            <Typography variant='title' textAlign="end">
              <LineItems orderItems={orderOpened?.lineItems}/>
            </Typography>
          </Grid>
          <Grid item alignContent="flex-end">
            <Typography variant='title' textAlign="end">
            <img src={orderOpened.imageUrl} alt="Order" className={classes.image} />
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default LineItemsCard




