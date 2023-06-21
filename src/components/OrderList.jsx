import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import { Container, Grid } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

//import LineItems from './LineItems';
import LineItemsCard from './LineItemsCard'
import localData from '../resource/OrderList.json'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    "& .MuiTableCell-head": {
      fontWeight: 700,
      backgroundColor: '#e1dbff'
    },
    "& .MuiTableRow-root": {
      backgroundColor: 'white'
    }
  }
});

const OrderList = () => {
  const classes = useStyles();
  const [orders, setOrders] = useState(localData);
  const [lineItems, setLineItems] = useState([])
  const [open, setOpen] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then(response => {
        if (!response.ok) { throw response }
        return response.json()
      })
      .then(data => {
        setOrders(data)
      })
      .catch(error => {
        console.error('Error:', error);
        // If the API request fails, load data from local json file
        setOrders(localData);
      });
  }, []);

  const handleRowClick = (orderId) => {
    setOpen(prevOpen => ({ ...prevOpen, [orderId]: !prevOpen[orderId] }));
  };
  

  return (
    <Container maxWidth="lg">
      <Box display="flex" p={1}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Order ID</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>subCategory</TableCell>
                <TableCell>Segment</TableCell>
                <TableCell>Product name</TableCell>
                <TableCell>Order date</TableCell>
                <TableCell>Region</TableCell>
                <TableCell>Profit</TableCell>
                <TableCell>Sales</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders?.map((order) => (
                <React.Fragment key={order.id}>
                  <TableRow onClick={() => handleRowClick(order.id)}>
                    <TableCell>
                      <IconButton aria-label="expand row" size="small">
                        {open[order.id] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                      </IconButton>
                    </TableCell>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.category}</TableCell>
                    <TableCell>{order.subCategory}</TableCell>
                    <TableCell>{order.segment}</TableCell>
                    <TableCell>{order.productName}</TableCell>
                    <TableCell>{order.orderDate}</TableCell>
                    <TableCell>{order.region}</TableCell>
                    <TableCell>{order.profit}</TableCell>
                    <TableCell>{order.sales}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
                      <Collapse in={open[order.id]} timeout="auto" unmountOnExit>
                        <Grid container spacing={2}>
                          <Grid item xs={10}>
                            <LineItemsCard orderOpened={order}/>
                          </Grid>
                        </Grid>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default OrderList;
