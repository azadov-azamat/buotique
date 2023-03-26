import React from 'react';
import {HeroProps} from "./hero.props";
import {BiChevronDown, BsClock, CgMouse, IoLocationOutline} from "react-icons/all";
import classes from "../../styles/hero.module.scss";

function HeroComponent({children, title, imgBg}: HeroProps): JSX.Element {
    return (
        <header className={classes.header}>
            <img src={imgBg} alt="header-img" className={"w-full h-full absolute -z-10 object-cover object-center"}/>
            <div className={classes['head-top']}></div>
            <div className={classes['head-text']}>
                <div className={classes['border-head']}>
                    <span className={classes.span}>
                        {title}
                    </span>
                </div>
                {children}
            </div>
            <div className={classes['head-bottom']}>
                <p>
                    <IoLocationOutline/>
                    Ташкент, улица Мирза Голиб 1
                </p>
                <a href={"#brands"} className={classes.mouse}>
                    <CgMouse/>
                    <BiChevronDown className={classes.img}/>
                </a>
                <p>
                    <BsClock/>
                    Без выходных 10:00 - 19:00
                </p>
            </div>
        </header>
    );
}

export default HeroComponent;