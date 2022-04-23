import './headerlayout.less';
import _ from "lodash";
import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import type {IRoute} from "@/types/route";

interface HeaderLayoutProps {
    routes: IRoute[];
}

/**
 * 头部导航栏
 * @param props
 * @returns
 */
export const HeaderLayout: FC<HeaderLayoutProps> = (props) => {
    const {routes} = props;
    const getMenuItem = (menuArr: IRoute[]) => {
        // 获取菜单项
        return _.map(menuArr, (route: IRoute) => {
            if (route.hidden !== false) {
                /**
                 * 这里可以处理多层级菜单
                 */
                return (
                    <NavLink to={route.path} key={route.path}>
                        {route.meta?.title}
                    </NavLink>
                );
            }
        });
    };

    return (
        <div className="header-layout">
            {getMenuItem(routes)}
        </div>
    );
};
