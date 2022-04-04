// import "antd/dist/antd.less";

import React, { Suspense, FunctionComponent } from "react";
import { RoutesLayout } from "@/layout/RouteLayout";
import { Loadings } from "@/components/Loding";

const App: FunctionComponent = () => {
  return (
    <Suspense fallback={<Loadings />}>
      <RoutesLayout />
    </Suspense>
  );
};

export default App;
