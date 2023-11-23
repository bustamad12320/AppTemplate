import React from "react";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import {ColorModeContext} from "./App";

interface ModeToggleProps {
    children: React.ReactElement;
}

export const ModeToggle = ({children}: ModeToggleProps): React.ReactNode => {
    const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
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
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}