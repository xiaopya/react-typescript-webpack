// import Loadable from "react-loadable";
// import { loading } from "@/components/Loading";
import {lazy} from "react";
import {IRoute} from "@/types/route";

export const Home = lazy(() => import("@/pages/Home"));
export const Child = lazy(() => import("@/pages/Child"));


const routes: IRoute[] = [
    {
        path: "/home",
        component: Home,
        meta: {
            title: "首页",
        },
    },
    {
        path: "/child",
        component: Child,
        meta: {
            title: "子页面",
        },
        children: [
            {
                path: "/child",
                component: Child,
                meta: {
                    title: "子页面",
                },
            },
        ],
    },
    {
        path: "/*",
        meta: {
            title: "首页",
        },
        hidden: false,
        redirect: "/home",
    },
];

export default routes;
