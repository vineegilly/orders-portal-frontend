import Box from '@material-ui/core/Box';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import OrderList from './OrderList';

const Layout = () => {

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Orders
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{ m: 2, boxShadow: 3 }} >
                <OrderList />
            </Box>
        </>
    )
}

export default Layout;