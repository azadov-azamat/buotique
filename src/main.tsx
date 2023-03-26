import React, {Suspense} from 'react'
import './styles/index.css'
import './helpers/translation/i18n'

import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import {Provider} from 'react-redux'
import App from './App'
import {ToastContainer} from 'react-toastify'
import {store} from "./redux/store"

import { ThemeProvider } from "@material-tailwind/react";

const app = (
    <Provider store={store}>
        <Suspense fallback={false}>
            <ToastContainer
                position='top-right'
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
            />
            <BrowserRouter>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </BrowserRouter>
        </Suspense>
    </Provider>
)
const container = document.getElementById('root') as HTMLElement

const root = createRoot(container)
root.render(app)