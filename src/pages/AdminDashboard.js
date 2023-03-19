import {useRef} from 'react';
import NavBar from '../components/NavBar';
import TextareaAutosize from 'react-textarea-autosize';
import {AiOutlineCloudUpload} from 'react-icons/ai'
import {useForm} from '../hooks/useForm'
import { storage } from '../config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, getDocs, setDoc, doc, updateDoc, deleteDoc, increment} from "firebase/firestore";
import { database } from "../config/firebase";


const postForm={
  title:'',
  description:''
}


function AdminDashboard() {

  const {title,description,onChangeForm}= useForm(postForm);

  const fileInputRef= useRef();

  const onFileInputChange =({target})=>{
    
    if(target.files===0) return ;
    console.log('subiendo archivos');
    
    


  }


  const onSubmit=(event)=>{

    if(title==='') return ;
    if(description==='') return ;

    event.preventDefault();
    console.log({title, description});
    console.log(event.target);

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
              multiple
              onChange={onFileInputChange}
              style={{display:'none'}}
            />

            <button
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



    </div>
  )
}

export default AdminDashboard