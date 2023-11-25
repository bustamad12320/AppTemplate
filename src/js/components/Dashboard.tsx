import React from 'react';
import {Grid, Paper} from "@mui/material";
import {Box} from "@mui/system";
import { MenuDrawerContext } from '../DrawerContext';

const firstRowDataCardStyle = {
    padding: '20px',
    height: '300px'
}

const secondRowDataCardStyle = {
    padding: '20px',
    height: '300px'
}

export const Dashboard = () => {
    const {isDrawerOpen} = React.useContext(MenuDrawerContext);

    return (
        <Box sx={{paddingLeft: isDrawerOpen ? 23 : 10, paddingRight: 4, marginTop: 10}}>
            <Grid container gap={2} wrap="nowrap">
                <Grid item xs={12} sm={4}>
                    <Paper sx={firstRowDataCardStyle}> xs=4 </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper sx={firstRowDataCardStyle}> xs=4 </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper sx={firstRowDataCardStyle}> xs=4 </Paper>
                </Grid>
            </Grid>
            <Grid item xs={12} marginY={2}>
                <Paper sx={secondRowDataCardStyle}> xs=8 </Paper>
            </Grid>
        </Box>
    );
}