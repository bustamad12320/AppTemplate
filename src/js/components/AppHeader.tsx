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
import MenuIcon from "@mui/icons-material/Menu";
import { DrawerMenu } from './DrawerMenu';
import { DrawerContext, MenuDrawerContext } from '../DrawerContext';
import { ColorModeContext } from '../App';

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

const appBarStyle = {
    position: 'fixed',
    zIndex: 1400
}

const avatarContainerStyle = {
    display: 'flex',
    justifyContent: 'end'
}

export const AppHeader = () => {
    const colorMode = React.useContext(ColorModeContext);
    const {toggleIsDrawerOpen} = React.useContext(MenuDrawerContext);
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [open, setOpen] = React.useState<boolean>(anchorEl ? true : false);
    const [menuDrawerOpen, setMenuDrawerOpen] = React.useState<boolean>(false);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open);
    }

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    }

    const handleMenuDrawerToggle = () => {
        setMenuDrawerOpen(!menuDrawerOpen);
        toggleIsDrawerOpen();
    }

    return (
        <Box>
            <AppBar sx={appBarStyle}>
                <Container maxWidth="xl" disableGutters>
                    <Toolbar disableGutters>
                        <Grid container gap={0}>
                            <Grid item xs={9} sx={companyInfoContainerStyle}>
                                <IconButton color="inherit" sx={{padding: theme.spacing(1), marginX: theme.spacing(2)}} onClick={handleMenuDrawerToggle}>
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
            <DrawerMenu open={menuDrawerOpen}/>
        </Box>
    );
}