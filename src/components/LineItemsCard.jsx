import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import LineItems from './LineItems';
import NotAvailable from './NotAvailable';

const useStyles = makeStyles({
    paper: {
        background: "#fef4ea",
        padding: 20,
        borderRadius: 10,
        margin:5,
    },
    image: {
      borderRadius: 10,
  },

  
  });

const LineItemsCard = ({orderOpened}) => {
const classes = useStyles();
console.log(orderOpened);

  return (
    <>
      <Paper className={classes.paper} >
        <Grid container>
          <Grid item xs={6}>
          {orderOpened?.lineItems.length >0 ?
          <LineItems orderItems={orderOpened?.lineItems} /> 
          : <NotAvailable asset={'Line Items'} />
          }
          </Grid>
          <Grid item xs={6}>
            {orderOpened.imageUrl ? <img src={orderOpened.imageUrl} alt="Order" className={classes.image} /> 
          :  <NotAvailable asset={'Image'}/>
          }
          
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default LineItemsCard




