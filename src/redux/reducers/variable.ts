import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {InitialStateProps} from "../../interface/variable.interface";
import {Dictionary} from "../../helpers/enumuration/dictionary";
import i18n from "i18next";

const initialState: InitialStateProps = {
    lang: localStorage.getItem('i18nextLng') || 'ru',
    loadingPage: false,
    social: [
        {
            link: "https://www.instagram.com/azadov_azamat",
            name: 'Instagram'
        },
        {
            link: "https://t.me/azamat_azadov",
            name: 'Telegram'
        },
        {
            link: "https://t.me/azamat_azadov",
            name: 'Tik tok'
        }
    ]
}

const reducers = {
    setLang: (state: InitialStateProps, action: PayloadAction<number>) => {
        const langIndex = action.payload
        state.lang = Dictionary[langIndex]
        i18n.changeLanguage(Dictionary[langIndex])
    },
    handleRefresh: (state: InitialStateProps, action: PayloadAction<boolean>) => {
        state.loadingPage = action.payload
    }
}

export const variableSlice = createSlice({
    name: 'variable',
    initialState,
    reducers
})

export const {setLang, handleRefresh} = variableSlice.actions;
export default variableSlice.reducer