import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { database, storage } from "../../config/firebase";
import { getNews } from "../../helpers/loadNews"
import { deleteNews, setNews, updateNews } from "./newsSlice";
import {deleteObject, getDownloadURL, ref, uploadBytes} from 'firebase/storage'



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

        
        if(!news)return ;

        if(!news.file)return;


        const storageRef=ref(storage,`newsImages/${news.imageID}`);

        //Delete actual image
        await deleteObject(storageRef);

        //Upload image
        await uploadBytes(storageRef,news.file);
        const newImageURL= await getDownloadURL(storageRef);

        
        const news2={
            id:news.id,
            title:news.title,
            description:news.description,
            image:newImageURL,
            imageID:news.imageID,
            date: news.date,
        }

        const newsToFirestore= {...news2};
        delete newsToFirestore.id;//delete id to save in database



        const docRef= doc(database, `posts/${news.id}`);
        await setDoc(docRef,newsToFirestore,{merge:true});

        dispatch(updateNews(news2));


    }
}

export const startDeleteNews=(id,imageID)=>{
    return async (dispatch)=>{
        
        const docRef= doc(database, `posts/${id}`);
        const storageRef=ref(storage,`newsImages/${imageID}`);
        
        await deleteObject(storageRef);
        await deleteDoc(docRef);
        dispatch(deleteNews(id));
    }
}