import React from "react";
import { Dispatch } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import {RunDashboard} from "./components/RunDashboard";
import {Box} from "@mui/system";
import {CssBaseline} from "@mui/material";
import {AppHeader} from "./components/AppHeader";
import {Testing} from "./components/Testing";
import { ModeToggleContext } from "./ModeToggleContext";
import { DrawerContext } from "./DrawerContext";

function Default() {
    return <div>
        Default
    </div>
}

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
                            <Route path={"/theory"} element={<div> Theory </div>}/>
                            <Route path={"*"} element={<Testing/>}/>
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