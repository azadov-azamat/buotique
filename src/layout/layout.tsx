import React from 'react';
import {LayoutProps} from "./layout.props";
import {Footer, Navbar} from "../components";

function Layout({children}: LayoutProps): JSX.Element {
    return (
        <>
            <Navbar/>
            <div>{children}</div>
            <Footer/>
        </>
    );
}

export default Layout;