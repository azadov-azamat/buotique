import React, {useEffect, useState} from 'react';
import classes from '../../styles/navbar.module.scss'
import {Link, useLocation} from "react-router-dom";
import {FiPhone} from "react-icons/fi"
import {BsClock, BsGlobe} from "react-icons/bs"
import {IoLocationOutline} from "react-icons/io5"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {useTranslation} from "react-i18next";
import {setLang} from "../../redux/reducers/variable";
import {Dictionary} from "../../helpers/enumuration/dictionary";

function Navbar(): JSX.Element {

    const dispatch = useDispatch()
    const location = useLocation()
    const {t, i18n} = useTranslation()
    const {lang} = useSelector((state: RootState) => state.myVar)

    const [position, setPosition] = useState(0)

    const path = location?.pathname

    console.log("i18n", i18n.language)
    console.log("state", lang)

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, [])

    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        setPosition(winScroll)
    }

    return (
        <nav className={classes.navbar}>
            {t('hello')}
            <button onClick={()=> dispatch(setLang(Dictionary.uz))}>uzb</button>
            <button onClick={()=> dispatch(setLang(Dictionary.ru))}>rus</button>
            <button onClick={()=> dispatch(setLang(Dictionary.en))}>eng</button>
        </nav>
    );
}

export default Navbar;