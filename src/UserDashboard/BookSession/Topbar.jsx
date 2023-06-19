import React from "react";
import { NavLink } from "react-router-dom";

const Topbar = () => {
    return (
        <div className="coursesState">
            <p className="p1 active" id='all'><NavLink to="/book_session">All</NavLink></p>
            <p className="p2" id='coding'><NavLink to="/book_session/coding">Coding</NavLink></p>
            <p className="p3" id='english'><NavLink to="/book_session/english">English</NavLink></p>
        </div>
    )
}

export default Topbar;
