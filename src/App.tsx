import "./styles/index.less";
import React, {FC, Suspense} from "react";
import {RoutesLayout} from "@/layout/RouteLayout";
import {Loadings} from "@/components/Loding";

const App: FC = () => {
    return (
        <div id="liziyuan-container">
            <Suspense fallback={<Loadings/>}>
                <RoutesLayout/>
            </Suspense>
        </div>
    );
};

export default App;
