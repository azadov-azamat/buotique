import React from 'react';
import Hero from "../../components/hero";
import img from "../../assets/head/abayas.png";
import {useTranslation} from "react-i18next";

function AbayasPage(): JSX.Element {

    const {t} = useTranslation()

    return (
        <Hero title={t('hero_abayas')} imgBg={img}></Hero>
    );
}

export default AbayasPage;