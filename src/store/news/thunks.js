import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { database } from "../../config/firebase";
import { getNews } from "../../helpers/loadNews"
import { deleteNews, setNews, updateNews } from "./newsSlice";



export const startLoadingNews=()=>{

    return async(dispatch)=>{

        const news= await getNews();
        
        if(!news) return ;

        dispatch(setNews(news));

        // console.log(news);
    }

}

export const startUpdateNews=(news)=>{
    return async (dispatch)=>{

        console.log(news);
        if(!news)return ;

        const newsToFirestore= {...news};
        delete newsToFirestore.id;//delete id to save in database
 
        const docRef= doc(database, `posts/${news.id}`);
        await setDoc(docRef,newsToFirestore,{merge:true});

        dispatch(updateNews(news));


    }
}

export const startDeleteNews=(id)=>{
    return async (dispatch)=>{
        
        const docRef= doc(database, `posts/${id}`);
        await deleteDoc(docRef);
        dispatch(deleteNews(id))
    }
}