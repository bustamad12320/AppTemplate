import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import {RunDashboard} from "./components/RunDashboard";
import {Box} from "@mui/system";
import {CssBaseline} from "@mui/material";
import {ModeToggle} from "./ModeToggle";
import {AppHeader} from "./components/AppHeader";
import {Testing} from "./components/Testing";

function Default() {
    return <div>
        Default
    </div>
}

const mainStyle = {
}

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const App = () => {
    return (
        <ModeToggle>
            <Box sx={mainStyle}>
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
        </ModeToggle>
    );
}

const entryPoint = document.getElementById('marathon-planner');
const root = createRoot(entryPoint);
root.render(<App/>);