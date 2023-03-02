import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Layout/Nav";

export default function Layout() {
    return (
        <>
            <div>
                <Navigation />
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
}
