import { createSlice } from '@reduxjs/toolkit';
export const newsSlice = createSlice({
    name: 'news',
    initialState: {
     posts:[],
     isLoading:true
    },
    reducers: {
     setNews: (state, {payload}) => {
        state.isLoading=false;
         state.posts=payload;
     },
     updateNews:(state, {payload})=>{
        state.isLoading=false;
        state.posts=state.posts.map(n=>{
            if(n.id===payload.id){
                return payload;
            }
            return n;
        });
     },
     deleteNews:(state,{payload})=>{
        state.posts=state.posts.filter(n=>n.id !== payload);
        
     }
}
});
export const { setNews,updateNews,deleteNews } = newsSlice.actions;