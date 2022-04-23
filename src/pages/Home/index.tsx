import React, {FC, useEffect} from "react";
import {notification} from "antd";

const Home: FC = () => {
    useEffect(() => {
        notification.open({
            message: "欢迎来到路由页面",
        });
    }, []);
    return (
        <div>这是第一个页面</div>
    );
};

export default Home;
