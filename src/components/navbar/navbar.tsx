import React, {useEffect, useState} from 'react';
import classes from '../../styles/navbar.module.scss'
import {Link, useLocation} from "react-router-dom";
import {FiPhone} from "react-icons/fi"
import {BsGlobe} from "react-icons/bs"
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import logo from "../../assets/logo.png"
import {useTranslation} from "react-i18next";
import {Dictionary} from "../../helpers/enumuration/dictionary";
import {useAppDispatch} from "../../redux/hooks";
import {
    Button,
    Card,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    Option,
    Select,
    Typography
} from "@material-tailwind/react";
import {setLang} from "../../redux/reducers/variable";
import {ChevronDownIcon, ClockIcon, RocketLaunchIcon} from "@heroicons/react/24/outline";
import {IoLocationOutline} from "react-icons/all";

function Navbar(): JSX.Element {

    const dispatch = useAppDispatch()
    const location = useLocation()
    const {t} = useTranslation()
    const path = location?.pathname

    const [position, setPosition] = useState(0)
    const {lang, social} = useSelector((state: RootState) => state.myVar)
    const [openMenu, setOpenMenu] = React.useState(false);

    const triggers = {
        onMouseEnter: () => setOpenMenu(true),
        onMouseLeave: () => setOpenMenu(false),
    };

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, [])

    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        setPosition(winScroll)
    }
    const links = [
        {id: 0, name: 'home', href: "/"},
        {id: 1, name: 'weddings', href: '/weddings'},
        {id: 2, name: 'abayas', href: '/abayas'},
        {id: 3, name: 'beauty', href: '/beauty'}
    ]

    const links2 = [
        {id: 0, name: 'home', href: "/"},
        {id: 1, name: 'weddings', href: '/weddings'},
        {id: 2, name: 'abayas', href: '/abayas'}
    ]

    const links3 = [
        {id: 0, name: 'abayas', href: '/abayas'},
        {id: 1, name: 'beauty', href: '/beauty'},
        {id: 2, name: 'accessories', href: '/accessories'}
    ]
    const linksMd = [
        {id: 0, name: 'home', href: "/"},
        {id: 1, name: 'weddings', href: '/weddings'},
        {id: 2, name: 'abayas', href: '/abayas'},
        {id: 3, name: 'beauty', href: '/beauty'},
        {id: 4, name: 'accessories', href: '/accessories'}
    ]

    const links4 = [
        {
            id: 1,
            name: <>
                <FiPhone fontSize={15}/>
                {t('phone_nav')}
            </>,
            href: `tel:${t('phone_nav')}`
        },
        {
            id: 2,
            name: <Menu open={openMenu} handler={setOpenMenu}>
                <MenuHandler>
                    <Button
                        {...triggers}
                        variant="text"
                        className="flex items-center hover:bg-transparent gap-3 text-sm text-primary_light font-normal capitalize tracking-normal"
                    >
                        <BsGlobe fontSize={15}/> {lang}{" "}
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`h-3.5 w-3.5 transition-transform ${
                                openMenu ? "rotate-180" : ""
                            }`}
                        />
                    </Button>
                </MenuHandler>
                <MenuList
                    {...triggers}
                    className="hidden w-8 grid-cols-3 overflow-visible lg:grid"
                >
                    <ul className="col-span-3 flex flex-col gap-1">
                        {Object.values(Dictionary).filter((v) => !isNaN(Number(v))).map(key => (
                            <a href="#" key={key} onClick={() => dispatch(setLang(Number(key)))}>
                                <MenuItem>
                                    <Typography variant="h6" color="blue-gray" className="mb-1">
                                        {Dictionary[Number(key)]}
                                    </Typography>
                                </MenuItem>
                            </a>))}
                    </ul>
                </MenuList>
            </Menu>,
            href: '#'
        }
    ];

    links.forEach(function (item, index, object) {
        if (item.href === path) {
            object.splice(index, 1);
        }
    })
    linksMd.forEach(function (item, index, object) {
        if (item.href === path) {
            object.splice(index, 1);
        }
    })
    links2.forEach(function (item, index, object) {
        if (item.href === path) {
            object.splice(index, 1);
        }
    })
    links3.forEach(function (item, index, object) {
        if (item.href === path) {
            object.splice(index, 1);
        }
    })

    if (path === "/weddings") delete links3[0]
    if (path === "/") delete links3[0]
    if (path === "/beauty") delete links2[2]
    if (path === "/accessories") delete links2[2]
    if (path === "/accessories") delete links[3]

    return (
        <nav className={position !== 0 || path === "/accessories" ? classes['nav-scroll'] : classes.navbar}>
            <div className={'hidden xl:flex'}>
                <ul className={classes['nav-ul']}>
                    {links.map(link => <li key={link.id}><Link to={link.href}>{t(link.name)}</Link>
                    </li>)}
                </ul>
            </div>

            <div className={"md:block xl:hidden hidden"}>
                <ul className={classes['nav-ul']}>
                    {links2.map(link => <li key={link.id}><Link to={link.href}>{t(link.name)}</Link>
                    </li>)}
                </ul>
            </div>

            <Link to={"/"} className={classes.logo}>
                <img src={logo} alt="logo-name"/>
                <p className={"uppercase"}>Weddings</p>
            </Link>

            <div className={"hidden xl:flex"}>
                <ul className={classes['nav-ul']}>
                    {path !== "/accessories" ?
                        <li><Link to={'/accessories'} className={"flex items-center gap-2"}>{t("accessories")}</Link>
                        </li> :
                        <li><Link to={'/beauty'} className={"flex items-center gap-2"}>{t("beauty")}</Link></li>
                    }
                    {links4.map(link => <li key={link.id}><a className={"flex items-center gap-2"}
                                                             href={link.href}>{link.name}</a>
                    </li>)}
                </ul>
            </div>
            <div className={"md:block xl:hidden hidden"}>
                <ul className={classes['nav-ul']}>
                    {links3.map((link: any) => <li key={link.id}><Link to={link.href}>{t(link.name)}</Link>
                    </li>)}
                </ul>
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
                        {linksMd.map(link => <li key={link.id}><Link to={link.href}>{t(link.name)}</Link></li>)}
                    </ul>
                    <div className={classes.variable}>
                        <div className={classes.setting}>
                            <div className={classes.lang}>
                                {Object.values(Dictionary).filter((v) => !isNaN(Number(v))).map(key => (
                                    <button key={key} onClick={() => dispatch(setLang(Number(key)))}>
                                        {Dictionary[Number(key)] === 'ru' ? 'Русский' : 'O’zbekcha'}
                                        <span></span>
                                    </button>
                                ))}
                            </div>
                            <div className={classes.social}>
                                <ul>
                                    {social?.map((item: any) => (<li><a href={item?.link} target={"_blank"} rel={"noopener"}>
                                        {item.name}</a>
                                    </li>))}
                                </ul>
                            </div>
                        </div>
                        <div className={classes.address}>
                            <div className={classes.p}>
                                <div>
                                    <ClockIcon fontSize={15}/>
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