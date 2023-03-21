import { createSlice } from '@reduxjs/toolkit';
export const newsSlice = createSlice({
    name: 'news',
    initialState: {
     noticia:[],
     isLoading:true
    },
    reducers: {
     setNews: (state, {payload}) => {
        state.isLoading=false;
         state.noticia=payload;
     },
     updateNews:(state, {payload})=>{
        state.isLoading=false;
        state.noticia=state.noticia.map(n=>{
            if(n.id===payload.id){
                return payload;
            }
            return n;
        });
     },
     deleteNews:(state,{payload})=>{
        state.noticia=state.noticia.filter(n=>n.id !== payload);
        
     }
}
});
export const { setNews,updateNews,deleteNews } = newsSlice.actions;