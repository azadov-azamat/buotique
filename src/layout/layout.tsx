import React, {useEffect} from 'react';
import {LayoutProps} from "./layout.props";
import {Footer, Navbar} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import * as Anim from "../components/Animation/index";
import {handleRefresh} from "../redux/reducers/variable";
import Title from "../components/title";
import commentClass from "../styles/comment.module.scss"
import OwlCarousel from 'react-owl-carousel'
import "../styles/carousel.scss"
import {CreateComment, ListComments} from "../components/comments";
import {CommentProps} from "../interface/variable.interface";


function Layout({children}: LayoutProps): JSX.Element {

    const dispatch = useDispatch()
    const {loadingPage} = useSelector((state: RootState) => state.myVar)
    const {comments} = useSelector((state: RootState) => state.myVar)

    useEffect(() => {
        setTimeout(() => {
            dispatch(handleRefresh(true))
        }, 2000);
    }, []);

    const responsive = {
        0: {
            items: 1
        },
        600: {
            items: 1.5
        },
        640: {
            items: 2
        },
        950: {
            items: 3
        },
        1024: {
            items: 2
        },
        1200: {
            items: 2
        },
        1300: {
            items: 3
        },
        1500: {
            items: 4
        }
    }

    return (
        <>
            <Anim.Refresh loading={loadingPage}/>
            <Navbar/>
            <div>{children}</div>
            {/*<div className={commentClass.wrapper}>*/}
            {/*    <Title text={"Дадим слова нашим клиентам"}/>*/}
            {/*    <div className={comments?.length === 0 ? "hidden" : commentClass['owl-theme']}>*/}
            {/*        <OwlCarousel*/}
            {/*            loop*/}
            {/*            autoplay={true}*/}
            {/*            nav={true}*/}
            {/*            center={true}*/}
            {/*            dots={false}*/}
            {/*            responsive={responsive}*/}
            {/*            smartSpeed={500}*/}
            {/*        >*/}
            {/*            {comments.map((item: CommentProps) => (*/}
            {/*                <ListComments id={item.id} name={item.name} text={item.text} stars={item.stars}/>*/}
            {/*            ))}*/}
            {/*        </OwlCarousel>*/}
            {/*    </div>*/}
            {/*    <CreateComment/>*/}
            {/*</div>*/}
            <Footer/>
        </>
    );
}

export default Layout;