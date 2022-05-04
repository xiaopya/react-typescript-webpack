import type {FC} from "react";
import React from "react";
import {Spin} from "antd";
import "./loading.less";
import {LoadingOutlined} from "@ant-design/icons";
import Loadable from "react-loadable";

interface propsType {
    tip?: string;
}

const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>;

export const Loadings: FC<propsType> = (props) => {
    return (
        <div className="liziyuan-loading">
            <Spin indicator={antIcon} tip={props.tip}/>
        </div>
    );
};


export function Lazy(ipt: () => Promise<any>): any {
    return Loadable({
        loader: ipt,
        loading() {
            return <Loadings/>;
        },
    })
}

Loadings.defaultProps = {
    tip: "加载中...",
};

