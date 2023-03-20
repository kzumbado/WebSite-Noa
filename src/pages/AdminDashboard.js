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


const postForm={
  title:'',
  description:''
}


function AdminDashboard() {

  const {noticia}=useSelector(state=>state.news);
  
  const dispatch=useDispatch();

  useEffect(() => {
    
    dispatch(startLoadingNews());
    
  }, [])
  


  console.log(noticia);

  const {title,description,onChangeForm,onResetForm}= useForm(postForm);

  const [image, setImage]= useState([])

  const [meta, setMeta] = useState({});

  const fileInputRef= useRef();

  const onFileInputChange =({target})=>{
    
    if(target.files===0) return ;
    console.log('subiendo archivos');
    
    setImage(target.files[0]);
  
  
  }

  

  



  const onSubmit=async(event)=>{
    event.preventDefault();

    if(image===null)return;
    if(title==='') return ;
    if(description==='') return ;

    const imageName=image.name;

    const imageRef= await ref(storage,`newsImages/${imageName}`);


     uploadBytes(imageRef,image,meta).then(async()=>{
      const imageURL= await getDownloadURL(imageRef);

      const newsRef= collection(database,'posts');

      await addDoc(newsRef,{title:title, description:description,image:imageURL,date: new Date().getDay()});
      alert('Nota creada');
      onResetForm();
     }).catch(error=>{
      console.log(error);
     })


  }



  return (


    <div>
        <NavBar activeLink={'/'} />
        <div className='h-[96px] bg-background dark:bg-backgroundNight'></div>
       

        <div className='w-full h-screen flex flex-col '>

        <h1 className='px-2 py-2 text-xl font-bold'>Create Post</h1>

          <form onSubmit={onSubmit} className='flex flex-col w-full h-auto justify-center items-center mx-2 my-2'>
            <input
              onChange={onChangeForm}
              name='title'
              placeholder='Title'
              type='text'
              value={title}
              className='w-full pl-2'
            />
            <TextareaAutosize 
            onChange={onChangeForm} 
            placeholder='Description' 
            name='description' 
            value={description} 
            className='w-full pl-2 mx-2 my-2 resize-none'
            maxRows={3}
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
                 className='text-5xl mx-2 my-2 text-primary-200'>
              <AiOutlineCloudUpload/>
            </button>

            <button className='w-1/2 rounded-xl text-orange-200 bg-primary-100 hover:bg-primary-200 py-1'>
              Send
            </button>
          </form>

        </div>

        <div>

          {
            noticia.map((n=>(
              <p>{n.title}</p>
            )))
          }


        </div>



    </div>
  )
}

export default AdminDashboard