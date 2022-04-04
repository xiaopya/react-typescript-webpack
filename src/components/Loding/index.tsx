import React, { FunctionComponent } from "react";
import { Spin } from "antd";
import "./loading.less";
import { LoadingOutlined } from "@ant-design/icons";

interface propsType {
  tip?: string;
}

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const Loadings: FunctionComponent<propsType> = (props) => {
  return (
    <div className="liziyuan-loading">
      <Spin indicator={antIcon} tip={props.tip} />
    </div>
  );
};

Loadings.defaultProps = {
  tip: "加载中...",
};
