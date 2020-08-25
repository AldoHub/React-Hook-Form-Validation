import React from "react";
import { Switch, Route } from "react-router-dom";

const Main = React.lazy(() => import("./components/Main"));


const Routes = () => (
    <React.Suspense fallback={<span>Loading, please wait...</span>}>
        <Switch>
            <Route exact path="/" render= {() => <Main/>} />
        </Switch>

    </React.Suspense>
);

export default Routes;