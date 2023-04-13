
import { useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useForm } from '../hooks/useForm';
import { MdDelete,MdSave} from 'react-icons/md'
import { FaExpandAlt } from "react-icons/fa"
import { useDispatch } from 'react-redux';
import {startDeleteNews, startUpdateNews,startLoadingNews} from '.././store/news/thunks'
import { useNavigate } from 'react-router-dom';

const NewsUpdateDelete = ({post={}}) => {

   const {title, description,onChangeForm,formState}= useForm({
    title:post.title,
    description:post.description
   });

   const [objectUrl,setObjectUrl]=useState(null);

   const [disableBtn,setDisableBtn]=useState(true)

   const navigate= useNavigate();
  
   const onNavigateToPost=()=>{
     navigate('/post',{state:{post}});
     dispatch(startLoadingNews());
   }



   const [image, setImage]= useState([])

   const dispatch= useDispatch();

   const fileInputRef= useRef();

   const onFileInputChange =({target})=>{
    
    if(target.files===0) return ;
    console.log('subiendo archivos');
    setImage(target.files[0]);
    setObjectUrl(URL.createObjectURL(target.files[0]));
    dispatch(startLoadingNews());

  }

  const onSubmit=(event)=>{
        event.preventDefault();
        const id=post.id;
        const date=post.date;
        const imageURL=post.imageURL;
        const imageID=post.imageID;
  
       
        const n={
            title,
            description,
            id,
            date,
            imageURL,
            imageID,
            image
        }
        dispatch(startUpdateNews(n));
        dispatch(startLoadingNews());
  }


  const onDelete=()=>{
    dispatch(startDeleteNews(post.id,post.imageID));
  }

  const toggleHoverImage = (id) =>{
    
    [].forEach.bind(document.getElementsByClassName(id),function(itm){
      itm.style.display = "flex";
    })();
  }

  const closeHoverImage = (id) =>{
    [].forEach.bind(document.getElementsByClassName(id),function(itm){
        itm.style.display = "none";
    })();
  }


  return (
    <div className='w-full h-full'>
 
      <form onSubmit={onSubmit} className='relative flex flex-col w-full h-auto items-center '>
          <small className='mt-2 text-gray-500 font-semibold w-full pl-3'>Title</small>
          <input 
            onChange={onChangeForm} 
            type='text' 
            placeholder='Title' 
            value={title} 

            name='title' 
            className={`text-heading max-w-lg w-full h-[40px] border-b-2 dark:text-background dark:placeholder-background" border-gray-400 bg-transparent placeholder-gray-500 pl-3 pb-1 outline-none focus:border-2 focus:rounded-md focus:border-primary-200`}
          />

          <small className='mt-5 text-gray-500 font-semibold w-full pl-3'>Description</small>
          <TextareaAutosize 
            onChange={onChangeForm} 
            placeholder='Description' 
            value={description} 
            name='description' 
            maxRows={5} 
            className={`text-heading max-w-lg w-full pt-2 border-b-2 dark:text-background dark:placeholder-background" border-gray-400 bg-transparent placeholder-gray-500 pl-3 outline-none focus:border-2 focus:rounded-md focus:border-primary-200 overflow-hidden resize-none pb-2`}
          />

          <input 
            type="file" 
            ref={fileInputRef}
            onChange={onFileInputChange}
            style={{display:'none'}}
          />

          <button
          className='absolute top-0 right-0 hover:bg-primary-200 rounded-full p-1 hover:bg-opacity-20'
          type='button'
          onClick={onNavigateToPost}
          >
            <FaExpandAlt className='text-primary-100 w-5 h-5' />
          </button>


          <button
            type='button'
            onClick={()=>fileInputRef.current.click()}
            title='Click to select Images'
            className={`transition-all ease-in-out relative text-5xl my-8 text-primary-200 w-52 h-52 overflow-hidden border-4 border-dashed rounded-2xl border-background hover:border-primary-200`}>
              <div 
              onMouseLeave={() => (closeHoverImage(post.id))}
                className={`${post.id} hidden absolute justify-center items-center w-full h-full bg-popup bg-opacity-10 text-white`}>
                <svg className='fill-white w-40 h-40 opacity-75' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Edit image</title><path d="M22.7 14.3L21.7 15.3L19.7 13.3L20.7 12.3C20.8 12.2 20.9 12.1 21.1 12.1C21.2 12.1 21.4 12.2 21.5 12.3L22.8 13.6C22.9 13.8 22.9 14.1 22.7 14.3M13 19.9V22H15.1L21.2 15.9L19.2 13.9L13 19.9M21 5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11V19.1L12.1 18H5L8.5 13.5L11 16.5L14.5 12L16.1 14.1L21 9.1V5Z" /></svg>
              </div>
              {
                (objectUrl)
                ?<img src={objectUrl} alt={post.title} className={`w-full h-full object-cover rounded-xl`} onMouseEnter={() => (toggleHoverImage(post.id))}></img>
                :<img src={post.imageURL} alt={post.title} className={`w-full h-full object-cover rounded-xl`} onMouseEnter={() => (toggleHoverImage(post.id))}></img>
              }
              
          </button>

          <div className='flex flex-row justify-between w-[200px]'>
              <button  title='Update' className='p-1 text-gray-500 hover:text-primary-200 hover:scale-110 hover:bg-primary-100 rounded-full hover:bg-opacity-10'>
                  <MdSave className='w-[30px] h-[30px]'/>
              </button>

              <button 
                onClick={onDelete} 
                title='Delete' 
                type='button'
                className='p-1 text-gray-500 hover:text-red-500 hover:scale-110 hover:bg-red-700 rounded-full hover:bg-opacity-10'>
                  <MdDelete className='w-[30px] h-[30px]'/>
              </button>
          </div>

      </form>
    </div>
  )
}

export default NewsUpdateDelete
