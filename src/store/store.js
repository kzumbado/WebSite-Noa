import { configureStore } from "@reduxjs/toolkit";
import { newsSlice } from "./news/newsSlice";

export const store = configureStore({
    reducer:{
        news:newsSlice.reducer
    }
})