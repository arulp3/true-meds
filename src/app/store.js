import {configureStore} from '@reduxjs/toolkit'
import articleReducaer from '../features/article-slice'

export const store = configureStore({
    reducer : {
       article : articleReducaer
    }
})