import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Layout/Nav";

export default function Layout({getData}) {
    return (
        <>
            <div>
                <Navigation getData={getData} />
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
}
