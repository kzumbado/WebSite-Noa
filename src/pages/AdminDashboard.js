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

  const [uploading, setUploading] = useState(false);
  const {posts,isLoading}=useSelector(state=>state.news);
  
  const dispatch=useDispatch();

  useEffect(() => {
    
    dispatch(startLoadingNews());
    
  }, [dispatch])
  


  // console.log({posts,isLoading});

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

    const addButton = document.querySelectorAll("#addPost");
    addButton[0]?.setAttribute("disabled", true);
    setUploading(true);

    const imageRef= ref(storage,`newsImages/${small_id}`);

     uploadBytes(imageRef,image).then(async()=>{
      const imageURL= await getDownloadURL(imageRef);

      const newsRef= collection(database,`posts`)

      await addDoc(newsRef,{title:title, description:description,imageURL:imageURL,imageID:small_id,date: new Date().getTime()});
      alert('Nota creada');
      dispatch(startLoadingNews());
      onResetForm();
      addButton[0]?.removeAttribute("disabled");
      setUploading(false);
     }).catch(error=>{
      console.log(error);
      addButton[0]?.removeAttribute("disabled");
      setUploading(false);
     })
  }

  return (


    <div>
        <NavBar activeLink={'/'} />
        <div className='h-[96px] bg-background dark:bg-backgroundNight'></div>
       
       <div className='w-full h-auto px-6 md:px-16 xl:px-40 3xl:px-60 py-10 '>
          <div className='w-auto max-w-xl h-full flex flex-col bg-white rounded-lg p-8 '>

            <h1 className='text-2xl lg:text-3xl font-bold py-5 text-primary-200 text-center'>Create Post</h1>

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
                    title='Click to select Images'
                    className='text-5xl mr-2 my-2 text-primary-200'>
                  <AiOutlineCloudUpload/>
                </button>

                <button
                  id='addPost'
                  className='w-full mt-5 xl:mt-8 max-w-lg bg-primary-100 py-3 text-white font-semibold hover:bg-primary-200 tracking-widest uppercase disabled:bg-primary-200'
                >
                  {!uploading? 
                        "Add"
                        : 
                        <div className="w-full flex justify-center items-center"> 
                            <svg fill='none' className="w-8 h-8 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
                            <path clipRule='evenodd'
                                d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                                fill='currentColor' fillRule='evenodd' />
                            </svg> 
                            Adding
                        </div>}
                </button>
              </form>

          </div>

          <div className='w-full h-auto py-10 flex flex-col items-center'>
            {posts[0]?.id&&<h1 className='text-2xl lg:text-3xl font-bold py-10 text-primary-200 text-center'>All Posts</h1>}
            <div className='w-full h-full flex flex-wrap gap-5 justify-center max-w-[1596px]'>
              {
                (isLoading) ? 
                  <div className='w-full flex h-footer-height justify-center items-center text-4xl text-primary-100 space-x-1 pt-10'>
                      <svg fill='none' className="w-14 h-14 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
                          <path clipRule='evenodd'
                              d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                              fill='currentColor' fillRule='evenodd' />
                      </svg>
                      <div>
                          Loading Posts...
                      </div>
                  </div>
                : 
                  posts.map((post) => (
                    <div className='bg-white rounded-lg p-7 w-96 hover:bg-zinc-100' key={post.id}>
                      <NewsUpdateDelete post={post}/>
                    </div>
                  ))
              }
           </div>
          </div>
       </div>
    </div>
  )
}

export default AdminDashboard
