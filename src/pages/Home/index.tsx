import React, { FunctionComponent, useEffect } from "react";
import { notification, Button } from "antd";

const Home: FunctionComponent = () => {
  useEffect(() => {
    notification.open({
      message: "欢迎来到路由页面",
    });
  }, []);
  return (
    <div>
      <Button>路由页面</Button>
    </div>
  );
};

export default Home;
