
import { useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useForm } from '../hooks/useForm';
import { MdDelete,MdSave} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import {startDeleteNews, startUpdateNews} from '.././store/news/thunks'

const NewsUpdateDelete = ({news={}}) => {

   const {title, description,onChangeForm}= useForm({
    title:news.title,
    description:news.description
   });

   const [image, setImage]= useState([])

   const dispatch= useDispatch();

   const fileInputRef= useRef();

   const onFileInputChange =({target})=>{
    
    if(target.files===0) return ;
    console.log('subiendo archivos');
    
    setImage(target.files[0]);
  }


  const onSubmit=(event)=>{
        event.preventDefault();
        const id=news.id;
        const date=news.date;
        const imageURL=news.image;
        const imageID=news.imageID;
        const file= image;
        const n={
            title,
            description,
            id,
            date,
            imageURL,
            imageID,
            file
        }
        dispatch(startUpdateNews(n));
  }


  const onDelete=()=>{
    dispatch(startDeleteNews(news.id,news.imageID));
}


  return (
    <div className='w-full h-full'>
 
            <form onSubmit={onSubmit} className='flex flex-col w-full h-auto mx-2 items-center '>
                <input onChange={onChangeForm} type='text' placeholder='Title' value={title} name='title' className='w-full pl-2  my-2'/>

                <TextareaAutosize onChange={onChangeForm} placeholder='Description' value={description} name='description' maxRows={3} className='w-full pl-2 my-2  resize-none'/>

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
                    <img src={news.image} alt={news.title} className='w-[200px] h-[200px]'></img>
                </button>

                <div className='flex flex-row justify-between w-[200px]'>
                    <button title='Update'>
                        <MdSave className='w-[30px] h-[30px] '/>
                    </button>

                    <button onClick={onDelete} title='Delete' type='button'>
                        <MdDelete className='w-[30px] h-[30px] '/>
                    </button>
                </div>

            </form>







    </div>
  )
}

export default NewsUpdateDelete