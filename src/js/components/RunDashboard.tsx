import React from 'react';
import {Grid, Paper} from "@mui/material";
import {Box} from "@mui/system";
import { MenuDrawerContext } from '../DrawerContext';

const dataCardStyle = {
    padding: '20px',
    height: '300px'
}

const runDashboardStyle = {
    display: 'grid',
    paddingLeft: 12,
    paddingRight: 4
}

export const RunDashboard = () => {
    const {isDrawerOpen} = React.useContext(MenuDrawerContext);

    return (
        <Box sx={{
            display: 'grid',
            paddingLeft: isDrawerOpen ? 23 : 10,
            paddingRight: 4
        }}>
            <Grid container gap={2}>
                <Grid item xs={12} sm={4}>
                    <Paper sx={dataCardStyle}> xs=4 </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper sx={dataCardStyle}> xs=4 </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper sx={dataCardStyle}> xs=4 </Paper>
                </Grid>
            </Grid>
            <Grid item xs={12} marginY={2}>
                <Paper sx={dataCardStyle}> xs=8 </Paper>
            </Grid>
        </Box>
    );
}