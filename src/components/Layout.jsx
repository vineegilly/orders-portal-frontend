import Box from '@material-ui/core/Box';
import { AppBar, Toolbar, Grid, Typography } from "@material-ui/core";
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
            <Box sx={{ flexGrow: 5, m: 2  }}>
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                        <OrderList />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Layout;