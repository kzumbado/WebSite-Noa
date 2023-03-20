import { getNews } from "../../helpers/loadNews"
import { setNews } from "./newsSlice";



export const startLoadingNews=()=>{

    return async(dispatch)=>{

        const news= await getNews();
        
        if(!news) return ;

        dispatch(setNews(news));

        // console.log(news);
    }

}