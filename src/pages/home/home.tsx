import React from 'react';
import Hero from "../../components/hero";
import {useTranslation} from "react-i18next";
import img from "../../assets/head/landing.png"
import classes from '../../styles/hero.module.scss'
import {BsPlay} from "react-icons/all";
import {FiPhone} from "react-icons/fi";
import * as Button from "../../components/button/index"

function HomePage(): JSX.Element {

    const {t} = useTranslation()

    return (
        <div>
            <Hero title={t('hero_landing')} imgBg={img}>
                <Button.Ripple onClick={() => console.log("modal...")} outline={true} color={"outline"}>Получить
                    консультация</Button.Ripple>
                <div className={classes.play}>
                    <div>Посмотреть видео</div>
                    <BsPlay fontSize={25}/>
                </div>
                <a href={"tel:+998 97 101 88-80"}
                   className={"flex items-center gap-2 md:hidden text-primary_light hover:text-gold"}>
                    <FiPhone/>
                    <div className={"text-base"}>
                        +998 97 101 88-80
                    </div>
                </a>
            </Hero>
        </div>
    );
}

export default HomePage;