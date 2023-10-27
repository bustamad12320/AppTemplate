import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import {RunDashboard} from "./components/RunDashboard";

function Dashboard() {
    return <div>
        Dashboard
    </div>
}

export const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path={"/dashboard"} element={<RunDashboard/>}/>
                    <Route path={"*"} element={<Dashboard/>}/>
                </Routes>
            </Router>
        </div>
    );
}

const entryPoint = document.getElementById('court-tracker');
const root = createRoot(entryPoint);
root.render(<App/>);