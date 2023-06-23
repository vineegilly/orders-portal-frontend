import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Container, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import NotAvailable from './NotAvailable'

const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },
});

const LineItems = ({ orderItems }) => {
    const classes = useStyles();
    console.log(orderItems);

    return (
        <Container maxWidth="sm">
            <Box display="flex">
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
        </Container>
    );
}

export default LineItems;
