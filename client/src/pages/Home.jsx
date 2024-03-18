//! This file contains the homepage of the dashboard. 

import { Link } from "react-router-dom";
// import plannerApp from "./Planner";

// import '../app.css';

export default function homePage() {

    return (
        <div className="app-container">
            {/* <Link to="./applications/Planner">The Daily Planner</Link> */}
            {/* <plannerApp /> Planner */}
            <Link to='./Planner'>Planner</Link>
        </div>
    )
}