import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CommentProps, InitialStateProps} from "../../interface/variable.interface";
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
    ],
    comments: [
        {
            id: 1,
            name: "Zarina",
            text: "Pelit ex tincidunt est. at hendrerit vehicula, malesuada amet, turpis non, venenatis elit non. sapien ipsum gravida placerat",
            stars: 4
        },
        {
            id: 2,
            name: "Komila",
            text: "Amet, Morbi elit tortor. quam amet, at, tempor amet, id Ut ex viverra amet, odio malesuada massa scelerisque ex sed sed id",
            stars: 4
        },
        {
            id: 3,
            name: "Asal",
            text: "Ut non urna viverra porta Donec tempor vitae tortor. eget sit maximus nec sed elit tincidunt sed dui non massa eget \n",
            stars: 3
        },
        {
            id: 4,
            name: "Muhayyo",
            text: "Nunc viverra amet, orci in eget Cras Nunc faucibus enim. viverra elit volutpat faucibus placerat. massa maximus Ut nibh acelit.",
            stars: 5
        },
        {
            id: 5,
            name: "Nodira",
            text: "Pelit ex tincidunt est. at hendrerit vehicula, malesuada amet, turpis non, venenatis elit non. sapien ipsum gravida placerat",
            stars: 2
        },
        {
            id: 6,
            name: "Zuhra",
            text: "Pelit ex tincidunt est. at hendrerit vehicula, malesuada amet, turpis non, venenatis elit non. sapien ipsum gravida placerat",
            stars: 1
        },
        {
            id: 7,
            name: "Madina",
            text: "Pelit ex tincidunt est. at hendrerit vehicula, malesuada amet, turpis non, venenatis elit non. sapien ipsum gravida placerat",
            stars: 5
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
    },
    pushComment: (state: InitialStateProps, action: PayloadAction<CommentProps>) => {
        state.comments.push(action.payload)
    }
}

export const variableSlice = createSlice({
    name: 'variable',
    initialState,
    reducers
})

export const {setLang, handleRefresh, pushComment} = variableSlice.actions;
export default variableSlice.reducer