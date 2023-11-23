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
import {Grid, Paper, useTheme} from "@mui/material";
import {Brightness4, Brightness7} from "@mui/icons-material";
import {ColorModeContext} from "../App";
import MenuIcon from "@mui/icons-material/Menu";

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

const companyInfoContainerStyle = {
    display: 'flex',
    alignItems: 'center'
}

const avatarContainerStyle = {
    display: 'flex',
    justifyContent: 'end'
}

export const AppHeader = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [open, setOpen] = React.useState<boolean>(anchorEl ? true : false);
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    const handleDrawerOpen = () => {
        console.log("opening drawer");
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Grid container gap={0}>
                        <Grid item xs={9} sx={companyInfoContainerStyle}>
                            <IconButton color="inherit" sx={{padding: theme.spacing(1), marginX: theme.spacing(2)}} onClick={handleDrawerOpen}>
                                <MenuIcon />
                            </IconButton>
                            <AdbIcon sx={{mr: 1}}/>
                            <Typography sx={appNameStyle}> LOGO </Typography>
                            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                                {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                            </IconButton>
                        </Grid>
                        <Grid item xs={3}>
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