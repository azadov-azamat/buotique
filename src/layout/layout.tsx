import React, {useEffect} from 'react';
import {LayoutProps} from "./layout.props";
import {Footer, Navbar} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import * as Anim from "../components/Animation/index";
import {handleRefresh} from "../redux/reducers/variable";

function Layout({children}: LayoutProps): JSX.Element {

    const dispatch = useDispatch()
    const {loadingPage} = useSelector((state: RootState) => state.myVar)

    useEffect(() => {
        setTimeout(() => {
            dispatch(handleRefresh(true))
        }, 2000);
    }, []);

    return (
        <>
            <Anim.Refresh loading={loadingPage}/>
            <Navbar/>
            <div>{children}</div>
            <Footer/>
        </>
    );
}

export default Layout;