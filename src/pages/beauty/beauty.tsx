import React from 'react';
import Hero from "../../components/hero";
import img from "../../assets/head/beauty.png";
import {useTranslation} from "react-i18next";

function WeddingsPage(): JSX.Element {

    const {t} = useTranslation()

    return (
        <Hero title={t('hero_beauty')} imgBg={img}></Hero>
    );
}

export default WeddingsPage;