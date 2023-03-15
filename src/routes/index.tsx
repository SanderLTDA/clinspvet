import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "~/pages/home";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Home} path="/" />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;