import React, {useEffect, useState} from 'react';
import classes from '../../styles/navbar.module.scss'
import {Link, useLocation} from "react-router-dom";
import {FiPhone} from "react-icons/fi"
import {BsClock, BsGlobe} from "react-icons/bs"
import {IoLocationOutline} from "react-icons/io5"
function Navbar(): JSX.Element {

    const location = useLocation()
    const path = location?.pathname

    const [position, setPosition] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, [])

    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        setPosition(winScroll)
    }

    return (
        <nav className={position !== 0 || path === "/accessories" ? classes['nav-scroll'] : classes.navbar}>
            <div className={'hidden xl:flex'}>
                {/*<ul className={classes['nav-ul']}>*/}
                {/*    {links.map(link => <li key={link.id}><Link to={link.href}>{link.name}</Link>*/}
                {/*    </li>)}*/}
                {/*</ul>*/}
            </div>

            <div className={"md:block xl:hidden hidden"}>
                {/*<ul className={classes['nav-ul']}>*/}
                {/*    {links2.map(link => <li key={link.id}><Link to={link.href}>{link.name}</Link>*/}
                {/*    </li>)}*/}
                {/*</ul>*/}
            </div>

            {/*<Link to={defaultRoute} className={classes.logo}>*/}
            {/*    <img src={logo} alt="logo-name"/>*/}
            {/*    <p className={"uppercase"}>Weddings</p>*/}
            {/*</Link>*/}


            <div className={"hidden xl:flex"}>
                <ul className={classes['nav-ul']}>
                    {/*{path !== "/accessories" ?*/}
                    {/*    <li><Link to={'/accessories'} className={"flex items-center gap-2"}>Аксессуары</Link></li> :*/}
                    {/*    <li><Link to={'/beauty'} className={"flex items-center gap-2"}>Beauty salon</Link></li>*/}
                    {/*}*/}
                    {/*{links4.map(link => <li key={link.id}><a className={"flex items-center gap-2"}*/}
                    {/*                                         href={link.href} onClick={link.onClick}>{link.name}</a>*/}
                    {/*</li>)}*/}
                </ul>
            </div>

            <div className={"md:block xl:hidden hidden"}>
                {/*<ul className={classes['nav-ul']}>*/}
                {/*    {links3.map(link => <li key={link.id}><Link to={link.href}>{link.name}</Link>*/}
                {/*    </li>)}*/}
                {/*</ul>*/}
            </div>

            <div className={classes.toggle}>
                <input className={classes.checkbox} type="checkbox" name="" id=""/>
                <div className={classes['hamburger-lines']}>
                    <span className={classes.line1}></span>
                    <span className={classes.line2}></span>
                    <span className={classes.line3}></span>
                </div>
                <div className={classes.menu}>
                    <ul className={classes['menu-ul']}>
                        {/*{linksMd.map(link => <li key={link.id}><Link to={link.href}>{link.name}</Link></li>)}*/}
                    </ul>
                    <div className={classes.variable}>
                        <div className={classes.setting}>
                            <div className={classes.lang}>
                                {/*{languages.map((item, index) =>*/}
                                {/*    <button key={index} onClick={changeLang}>*/}
                                {/*        {item.name2}*/}
                                {/*        <span></span>*/}
                                {/*    </button>*/}
                                {/*)}*/}
                            </div>
                            <div className={classes.social}>
                                <ul>
                                    {/*{social.map((item, index) => <li key={index}><a href={item.link}*/}
                                    {/*                                                target={"_blank"}*/}
                                    {/*                                                rel={"noopener"}*/}
                                    {/*>{item.name}</a>*/}
                                    {/*</li>)}*/}
                                </ul>
                            </div>
                        </div>
                        <div className={classes.address}>
                            <div className={classes.p}>
                                <div>
                                    <BsClock fontSize={15}/>
                                </div>
                                Без выходных 10:00 - 19:00
                            </div>
                            <div className={classes.p}>
                                <div>
                                    <IoLocationOutline fontSize={15}/>
                                </div>
                                Ташкент, улица Мирза Голиб 1
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;