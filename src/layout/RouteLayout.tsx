import type {FC} from "react";
import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import routes from "@/routes";
import type {IRoute} from "@/types/route";

import HeaderLayout from "./HeaderLayout";

/**
 * 路由
 * @returns
 */
export const RoutesLayout: FC = () => {
    return (
        <BrowserRouter>
            <HeaderLayout routes={routes}/>
            <Routes>
                {routes.map((route: IRoute) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={
                            route.component ? (
                                <route.component/>
                            ) : (
                                <Navigate replace to="/home"/>
                            )
                        }
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
};
