import { collection, getDocs } from "firebase/firestore";
import { database } from "../config/firebase";

export const getNews=async()=>{
    
    const news=[];
    const docRef= collection(database,'posts');
    const docs= await getDocs(docRef);
    
   

      docs.forEach(doc=>{

        const id= doc.id;
      

        news.push({...doc.data(),id})
       
      
      });

      // console.log(news);
      return news;

  }