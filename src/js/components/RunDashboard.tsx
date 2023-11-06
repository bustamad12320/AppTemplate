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
}

const dataCardStyle = {
    padding: '20px'
}


export const RunDashboard = () => {
    return (
        <Box>
            <Grid container gap={2} sx={containerStyle}>
                <Grid>
                    <Paper sx={dataCardStyle}> xs=4 </Paper>
                </Grid>
                <Grid>
                    <Paper sx={dataCardStyle}> xs=4 </Paper>
                </Grid>
                <Grid>
                    <Paper sx={dataCardStyle}> xs=4 </Paper>
                </Grid>
            </Grid>
            <Grid xs={12} marginY={2}>
                <Paper sx={dataCardStyle}> xs=8 </Paper>
            </Grid>
        </Box>
    );
}