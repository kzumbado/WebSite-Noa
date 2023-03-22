import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { database, storage } from "../../config/firebase";
import { getNews } from "../../helpers/loadNews"
import { deleteNews, setNews, updateNews } from "./newsSlice";
import {deleteObject, ref} from 'firebase/storage'



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

export const startDeleteNews=(id,imageID)=>{
    return async (dispatch)=>{
        
        const docRef= doc(database, `posts/${id}`);
        const storageRef=ref(storage,`newsImages/${imageID}`);
        await deleteObject(storageRef);
        await deleteDoc(docRef);
        dispatch(deleteNews(id))
    }
}
