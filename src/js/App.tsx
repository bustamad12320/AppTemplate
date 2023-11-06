import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import {RunDashboard} from "./components/RunDashboard";
import {Box, createTheme} from "@mui/system";
import {CssBaseline, IconButton, PaletteMode, ThemeProvider, useMediaQuery, useTheme} from "@mui/material";
import {ModeToggle} from "./ModeToggle";
import {Brightness1, Brightness4, Brightness7} from "@mui/icons-material";

function Default() {
    return <div>
        Default
    </div>
}

const mainStyle = {
    padding: '0px, 24px',
    maxWidth: '85rem',
    margin: 'auto'
}

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const App = () => {
    return (
        <ModeToggle>
            <Box sx={mainStyle}>
                <CssBaseline/>
                <Router>
                    <Routes>
                        <Route path={"/dashboard"} element={<RunDashboard/>}/>
                        <Route path={"*"} element={<Default/>}/>
                    </Routes>
                </Router>
            </Box>
        </ModeToggle>
    );
}

const entryPoint = document.getElementById('marathon-planner');
const root = createRoot(entryPoint);
root.render(<App/>);