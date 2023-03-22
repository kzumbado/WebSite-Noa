import {useEffect, useRef, useState} from 'react';
import NavBar from '../components/NavBar';
import TextareaAutosize from 'react-textarea-autosize';
import {AiOutlineCloudUpload} from 'react-icons/ai'
import {useForm} from '../hooks/useForm'
import { storage } from '../config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc} from "firebase/firestore";
import { database } from "../config/firebase";
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingNews } from '../store/news/thunks';
import NewsUpdateDelete from '../components/NewsUpdateDelete';
import { v4 as uuid } from 'uuid';

const postForm={
  title:'',
  description:''
}

//admin@admin.noads
//123Queso


function AdminDashboard() {

  const {noticia,isLoading}=useSelector(state=>state.news);
  
  const dispatch=useDispatch();

  useEffect(() => {
    
    dispatch(startLoadingNews());
    
  }, [dispatch])
  


  // console.log({noticia,isLoading});

  const {title,description,onChangeForm,onResetForm}= useForm(postForm);

  const [image, setImage]= useState([])



  const fileInputRef= useRef();

  const onFileInputChange =({target})=>{
    
    if(target.files===0) return ;
    console.log('subiendo archivos');
    
    setImage(target.files[0]);
  
  
  }

  const onSubmit=async(event)=>{
    event.preventDefault();

    const unique_id = uuid();
    const small_id= unique_id.slice(0,6);

    if(image===null)return;
    if(title==='') return ;
    if(description==='') return ;

    const imageRef= ref(storage,`newsImages/${small_id}`);

     uploadBytes(imageRef,image).then(async()=>{
      const imageURL= await getDownloadURL(imageRef);

      const newsRef= collection(database,`posts`)

      await addDoc(newsRef,{title:title, description:description,imageURL:imageURL,imageID:small_id,date: new Date().getTime()});
      alert('Nota creada');
      dispatch(startLoadingNews());
      onResetForm();
     }).catch(error=>{
      console.log(error);
     })
  }

  return (


    <div>
        <NavBar activeLink={'/'} />
        <div className='h-[96px] bg-background dark:bg-backgroundNight'></div>
       
       <div className='w-full h-auto px-6 md:px-16 xl:px-40 3xl:px-60'>
          <div className='w-auto max-w-xl h-full flex flex-col bg-white rounded-lg p-8'>

            <h1 className='text-2xl font-bold py-5 text-primary-200 text-center'>Create Post</h1>

              <form onSubmit={onSubmit} className='flex flex-col w-full h-full justify-start items-center'>
                <input
                  onChange={onChangeForm}
                  name='title'
                  placeholder='Title'
                  type='text'
                  value={title}
                  className={`text-heading mt-2 max-w-lg w-full h-[40px] border-b-2 dark:text-background dark:placeholder-background" border-gray-400 bg-transparent placeholder-gray-500 pl-3 pb-1 outline-none focus:border-2 focus:rounded-md focus:border-primary-200`}
                />
                <TextareaAutosize 
                  onChange={onChangeForm} 
                  placeholder='Description' 
                  name='description' 
                  value={description} 
                  className={`text-heading max-w-lg w-full mt-5 xl:mt-8 pt-2 border-b-2 dark:text-background dark:placeholder-background" border-gray-400 bg-transparent placeholder-gray-500 pl-3 outline-none focus:border-2 focus:rounded-md focus:border-primary-200 overflow-hidden resize-none pb-2`}
                  maxRows={5}
                />
              
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={onFileInputChange}
                  style={{display:'none'}}
                />

                <button
                    type='button'
                    onClick={()=>fileInputRef.current.click()}
                    title='Upload Images'
                    className='text-5xl mr-2 my-2 text-primary-200'>
                  <AiOutlineCloudUpload/>
                </button>

                <button
                  className='w-full mt-5 xl:mt-8 max-w-lg bg-primary-100 py-3 text-white font-semibold hover:bg-primary-200 tracking-widest uppercase'
                >
                  Send
                </button>
              </form>

          </div>
          {
            (isLoading)
            ? <p>Cargando noticias....</p>
            : noticia.map((n=>(
                <NewsUpdateDelete key={n.id} news={n}/>
             )))
           }
       </div>
    </div>
  )
}

export default AdminDashboard
