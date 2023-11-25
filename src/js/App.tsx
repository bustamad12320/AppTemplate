import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import {RunDashboard} from "./components/RunDashboard";
import {Box} from "@mui/system";
import {CssBaseline} from "@mui/material";
import {AppHeader} from "./components/AppHeader";
import { ModeToggleContext } from "./ModeToggleContext";
import { DrawerContext } from "./DrawerContext";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const App = () => {
    return (
        <ModeToggleContext>
            <DrawerContext>
                <Box>
                    <AppHeader/>
                    <CssBaseline/>
                    <Router>
                        <Routes>
                            <Route path={"/dashboard"} element={<RunDashboard/>}/>
                            <Route path={"*"} element={<div> Default Page </div>}/>
                        </Routes>
                    </Router>
                </Box>
            </DrawerContext>
        </ModeToggleContext>
    );
}

const entryPoint = document.getElementById('marathon-planner');
const root = createRoot(entryPoint);
root.render(<App/>);