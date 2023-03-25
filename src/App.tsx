import React from "react";
import {routes} from "./config/constants";
import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "./layout/layout";

function App(): JSX.Element {

    return (
        <Layout>
            <Routes>
                {
                    routes?.map(route =>
                        <Route
                            key={route.id}
                            path={route.path}
                            element={<route.component/>}
                        />
                    )
                }
                <Route
                    path='/'
                    element={<Navigate to={'/'} replace/>}
                />
            </Routes>
        </Layout>
    )
}

export default App
