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

export const AppHeader = () => {
    const [accountDropdownVisible, setAccountDropdownVisible] = React.useState<boolean>(false);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{mr: 1}}/>
                    <Typography sx={appNameStyle}> LOGO </Typography>
                    <Box>
                        <IconButton onClick={() => setAccountDropdownVisible(!accountDropdownVisible)}>
                            <Avatar/>
                        </IconButton>
                        <Menu
                            sx={{mt: '45px'}}
                            open={accountDropdownVisible}
                            onClose={() => setAccountDropdownVisible(false)}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}