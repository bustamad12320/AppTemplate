import React, {JSXElementConstructor, ReactElement} from "react";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import {ColorModeContext} from "./App";
import {Mode} from "@mui/system/cssVars/useCurrentColorScheme";
import {IconButton, useTheme} from "@mui/material";
import {Brightness4, Brightness7} from "@mui/icons-material";

interface ModeToggleProps {
    children: React.ReactElement;
}

export const ModeToggle = ({children}: ModeToggleProps): React.ReactNode => {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {theme.palette.mode} mode
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}