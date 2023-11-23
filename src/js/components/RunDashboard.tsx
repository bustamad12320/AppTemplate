import React from 'react';
import {Grid, Paper} from "@mui/material";
import {Box, createTheme} from "@mui/system";

const theme = createTheme();

const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    '@media (min-width: 768px)': {
        gridTemplateColumns: '1fr 1fr 1fr',
    },
    paddingY: theme.spacing(2)
}

const dataCardStyle = {
    padding: '20px',
    height: '300px'
}


export const RunDashboard = () => {
    return (
        <Box>
            <Grid container gap={2}>
                <Grid item xs={4}>
                    <Paper sx={dataCardStyle}> xs=4 </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper sx={dataCardStyle}> xs=4 </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper sx={dataCardStyle}> xs=4 </Paper>
                </Grid>
            </Grid>
            <Grid item xs={12} marginY={2}>
                <Paper sx={dataCardStyle}> xs=8 </Paper>
            </Grid>
        </Box>
    );
}