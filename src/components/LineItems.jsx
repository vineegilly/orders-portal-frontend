import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const lineItemsList = {
    "001": [
      {
        id: "001-01",
        item: "TableA",
        profit: 3,
        sales: 100,
      },
      {
        id: "001-02",
        item: "TableB",
        profit: 1,
        sales: 150,
      },
    ],
    "002": [
      {
        id: "002-01",
        item: "ChairA",
        profit: 2,
        sales: 200,
      },
      {
        id: "002-02",
        item: "ChairB",
        profit: 4,
        sales: 250,
      },
    ],
  };

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
  image: {
    width: '100%',
    height: 'auto',
  },
});

const LineItems = ({ orderItems }) => {
  const classes = useStyles();
  console.log(orderItems);

  return (
    <Container maxWidth="sm">
    <Box display="flex">
      <Box flexGrow={1}>
        <Table className={classes.table} size="small" aria-label="purchases">
          <TableHead>
            <TableRow>
              <TableCell>Line Item ID</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Profit($)</TableCell>
              <TableCell>Sales($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderItems?.map((lineItem) => (
              <TableRow key={lineItem.id}>
                <TableCell>{lineItem.id}</TableCell>
                <TableCell>{lineItem.item}</TableCell>
                <TableCell>{lineItem.profit}</TableCell>
                <TableCell>{lineItem.sales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
    </Container>
  );
}

export default LineItems;
