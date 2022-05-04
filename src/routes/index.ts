import {IRoute} from "@/types/route";
import {Child, Home, New} from './loadable'

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
        path: '/new',
        component: New,
        meta: {
            title: 'new页面',
        },
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
