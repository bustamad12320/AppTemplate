import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {Grid, Paper} from "@mui/material";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const appNameStyle = {
    mr: 2,
    display: 'flex',
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none'
}

const avatarContainerStyle = {
    display: 'flex',
    justifyContent: 'end'
}

export const AppHeader = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [open, setOpen] = React.useState<boolean>(anchorEl ? true : false);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Grid container gap={0}>
                        <Grid xs={9}>
                            <AdbIcon sx={{mr: 1}}/>
                            <Typography sx={appNameStyle}> LOGO </Typography>
                        </Grid>
                        <Grid xs={3}>
                            <Box sx={avatarContainerStyle}>
                                <IconButton onClick={handleClick}>
                                    <Avatar/>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                                        transformOrigin={{vertical: 'top', horizontal: 'center'}}
                                    >
                                        {settings.map((setting) => (
                                            <MenuItem key={setting}>
                                                <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}