import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const NestedRout= () => {
    return (
        <div className="">
            <nav>
                <NavLink to="featureProject">Feature Project</NavLink>
                <NavLink to="newProject">New Project</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}
export default NestedRout