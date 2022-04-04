import _ from "lodash";
import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import type { IRoute } from "@/types/route";

interface IHeaderLayoutProps {
  routes: unknown;
}

/**
 * 头部导航栏
 * @param props
 * @returns
 */
export const HeaderLayout: FunctionComponent<IHeaderLayoutProps> = (props) => {
  const { routes } = props;

  const getMenuItem = (menuArr: any) => {
    // 获取菜单项
    return _.map(menuArr, (route: IRoute) => {
      if (route.hidden !== false) {
        // if (route?.children) {
        //   // 有多级菜单时
        //   return (
        //     // 重复调用函数渲染出子级菜单
        //     <span>{getMenuItem(route.children)}</span>
        //   );
        // }
        return (
          <NavLink to={route.path} key={route.path}>
            {route.meta.title}
          </NavLink>
        );
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {getMenuItem(routes)}
    </div>
  );
};
