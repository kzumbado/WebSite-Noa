import { createSlice } from '@reduxjs/toolkit';
export const newsSlice = createSlice({
    name: 'news',
    initialState: {
     noticia:[],
     isLoading:true
    },
    reducers: {
     setNews: (state, action) => {
        state.isLoading=false;
         state.noticia=action.payload;
     },
}
});
export const { setNews } = newsSlice.actions;