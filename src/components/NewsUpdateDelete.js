
import { useRef, useState,useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useForm } from '../hooks/useForm';
import { MdDelete,MdSave} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import {startDeleteNews, startUpdateNews,startLoadingNews} from '.././store/news/thunks'

const NewsUpdateDelete = ({post={}}) => {

   const {title, description,onChangeForm,formState}= useForm({
    title:post.title,
    description:post.description
   });

   const [objectUrl,setObjectUrl]=useState(null);

   const [disableBtn,setDisableBtn]=useState(true)

    



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

  return (
    <div className='w-full h-full'>
 
      <form onSubmit={onSubmit} className='flex flex-col w-full h-auto items-center '>
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
            type='button'
            onClick={()=>fileInputRef.current.click()}
            title='Click to select Images'
            className='text-5xl my-8 text-primary-200 w-52 h-52 overflow-hidden border-4 border-dashed rounded-2xl border-gray-400'>
              {
                (objectUrl)
                ?<img src={objectUrl} alt={post.title} className='w-full h-full object-cover rounded-xl '></img>
                :<img src={post.imageURL} alt={post.title} className='w-full h-full object-cover rounded-xl '></img>
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
