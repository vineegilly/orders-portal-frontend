import Box from '@material-ui/core/Box';
import { Container, Grid, Typography } from "@material-ui/core";
import OrderList from './OrderList';

const Layout = () => {

    return (
        <>
            <Box sx={{ flexGrow: 5 }}>
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