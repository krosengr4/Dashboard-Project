//! This file contains the homepage of the dashboard. 

import { Link } from "react-router-dom";
// import plannerApp from "./Planner";

import '../app.css';

export default function homePage() {

    return (
<div className="app-container">
            {/* <Link to="./applications/Planner">The Daily Planner</Link> */}
            {/* <plannerApp /> Planner */}
            {/* <Link to='https://krosengr4.github.io/WorkDayScheduler/'>Daily Planner</Link> */}
            {/* <Link to='https://krosengr4.github.io/WorkDayScheduler/'>Daily Planner</Link> */}

            <div className="main-div">
        {/* <h1 className="page-title">The Daily Dashboard! </h1> */}
        <hr></hr>

    <section className='projects-container'>

        <a className='lower-project' href='https://krosengr4.github.io/WorkDayScheduler/'>
            <h3 className='small-project-label'>Workday Scheduler</h3>
            <img className='project-img' src='/Workday-scheduler.png' alt='Clickable image of my project'></img>
            <div className='overlay4'></div>
        </a>
        
        <a className='lower-project' href='https://krosengr4.github.io/Weather-Dashboard/'>
            <h3 className='small-project-label'>Weather Dashboard</h3>
            <img className='project-img' src='/Weather-Dashboard.png' alt='Clickable image of my project'></img>
            <div className='overlay2'></div>
        </a>

        <a className='lower-project' href='https://krosengr4.github.io/Password-Generator/'>
            <h3 className='small-project-label'>Random Password Generator</h3>
            <img className='project-img' src='/Password-Generator.png' alt='Clickable image of my project'></img>
            <div className='overlay5'></div>
        </a>

        <a className='lower-project' href='https://krosengr4.github.io/Password-Generator/'>
            <h3 className='small-project-label'>Note Taker</h3>
            <img className='project-img' src='/Password-Generator.png' alt='Clickable image of my project'></img>
            <div className='overlay5'></div>
        </a>

        {/* Replace with note taker */}
        {/* <a className='lower-project' href='https://krosengr4.github.io/Coding-Quiz/'>
            <img className='project-img' src='/Code-Quiz.png' alt='Clickable image of my project'></img>
            <div className='overlay3'>
                <h3 className='small-project-label'>Coding Quiz</h3>
            </div>
        </a> */}

    </section>

    </div>
</div>
    )
}