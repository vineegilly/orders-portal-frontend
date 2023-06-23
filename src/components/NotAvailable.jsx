import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

const NotAvailable = ({ asset }) => {

    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                textAlign="center"
                minHeight="100vh"
            >
                <Typography variant='h6'>
                    Order {asset} not available!
                </Typography>
            </Box>
        </>
    )
}

export default NotAvailable