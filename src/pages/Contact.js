import React, {useState} from 'react';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import {HiOutlineMail, HiOutlinePhone} from 'react-icons/hi';
import {AiOutlineGithub} from 'react-icons/ai';
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
import TextareaAutosize from 'react-textarea-autosize';
import useTranslate from '../hooks/useTranslation';


const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorEmail, setErrorEmail] = useState("");

  const removeError = (errorId) => {
    const error = document.getElementById(errorId);
    error.classList.add("hidden");
  }

  const sendEmail = (e) => {
    e.preventDefault();
    const re = /\S+@\S+\.\S+/;
    
    if (name === "") {
      const errorName = document.getElementById("errorName");
      errorName.classList.remove("hidden");
      return;
    }

    if (email === "") {
      var errorEmail = document.getElementById("errorEmail");
      setErrorEmail(t("contact.errorEmail1"))
      errorEmail.classList.remove("hidden");
      return;
    }

    if (!re.test(email)) {
      var errorEmailMsg = document.getElementById("errorEmail");
      setErrorEmail(t("contact.errorEmail2"))
      errorEmailMsg.classList.remove("hidden");
      return;
    }

    if (message === "") {
      var errorMessage = document.getElementById("errorMessage");
      errorMessage.classList.remove("hidden");
      return;
    }
    
    if (window.Email) {
      window.Email.send({
          Host : "smtp.elasticemail.com",
          Username : "kzumbado23@gmail.com",
          Password : "8FF020B25C8D85F0073B62E469B9C8BDDC08",
          Port : 2525,
          To : "kevin.zumbadocruz@gmail.com",
          From : "kzumbado23@gmail.com",
          Subject : `Consulta de ${name}`,
          Body : `${message}

          Datos de contacto
          Nombre: ${name} 
          Email: ${email}
          `,
      }).then(
        message => {
          alert("Correo Enviado");
          setName("");
          setEmail("");
          setMessage("");
        } 
      );
    }
  }
  
  const {t}=useTranslate();

  return (
    <div>
        
        <NavBar activeLink={'/contact'}/>
        <div className='h-[96px] bg-background dark:bg-backgroundNight'></div>

        <div className={`bg-background dark:bg-backgroundNight relative flex flex-col h-auto w-full px-6 md:px-16 py-20 md:py-30 xl:px-40 3xl:px-60 xl:flex-row`}>
          
          <div className="w-full flex flex-col items-center h-4/5 xl:h-screen xl:w-4/5 xl:items-start">
            <div className='text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl max-w-sm md:max-w-lg xl:max-w-xl 2xl:max-w-4xl leading-[45px] text-primary-200 font-bold'>
              {t("contact.contactUs")}
            </div>
            <p className={`max-w-sm text-center xl:text-left md:max-w-lg 3xl:max-w-xl 3xl:text-2xl dark:text-navbar-scroll text-gray-500 leading-6 mt-4 lg:mt-6 md:text-lg xl:text-xl 2xl:max-w-md`}>
              {t("contact.paragraph")}
            </p>

            <div className="flex flex-col w-full items-center mt-8 xl:items-start">
                <form method='POST' className="flex flex-col items-center w-full xl:items-start" onSubmit={sendEmail}>
                    <input onChange={(e) => {setName(e.target.value); removeError("errorName")}} value={name}  className={`mt-5 xl:mt-8 max-w-lg w-full h-[40px] border-b-2 dark:text-background dark:placeholder-background" border-gray-400 bg-transparent placeholder-gray-500 pl-3 pb-1 outline-none focus:border-2 focus:rounded-md focus:border-primary-200`} placeholder={t("contact.name")} type='text' >
                    </input>
                    <p id="errorName" className='hidden mt-1 ml-2 text-red-600'>{t("contact.errorName")}</p>
                    <input onChange={(e)=>{setEmail(e.target.value); removeError("errorEmail")}} value={email} className={`max-w-lg w-full mt-5 xl:mt-8 h-[40px] border-b-2 dark:text-background dark:placeholder-background" border-gray-400 bg-transparent placeholder-gray-500 pl-3 pb-1 outline-none focus:border-2 focus:rounded-md focus:border-primary-200`} placeholder={t("contact.email")} type='text' >
                    </input>
                    <p id="errorEmail" className='hidden mt-1 ml-2 text-red-500'>{errorEmail}</p>
                    <TextareaAutosize  onChange={(e)=>{setMessage(e.target.value); removeError("errorMessage")}} value={message} className={`max-w-lg w-full mt-5 xl:mt-8 pt-2 border-b-2 dark:text-background dark:placeholder-background" border-gray-400 bg-transparent placeholder-gray-500 pl-3 outline-none focus:border-2 focus:rounded-md focus:border-primary-200 overflow-hidden resize-none pb-2`} 
                    placeholder={t("contact.message")}   maxRows={3}/>
                    <p id="errorMessage" className='hidden mt-1 ml-2 text-red-500'>{t("contact.errorMessage")}</p>
                    
                    <button type='submit' className='w-full mt-5 xl:mt-8 max-w-lg bg-primary-100 py-3 text-white font-semibold hover:bg-primary-200 tracking-widest uppercase'>
                        {t("contact.send")}
                    </button>


                </form>           
             </div>
          </div>       

          <div className="absolute bottom-40 left-0 right-0 mx-auto bg-heading dark:bg-headingNight w-2/3 p-8 flex flex-col space-y-5 max-w-lg xl:hidden">
            <div className="text-white font-semibold text-xl">Info</div>
              <div className="w-full flex flex-row items-center space-x-3"> 
                <HiOutlineMail className="w-7 h-7 text-white" />               
                <p className="text-white">biosoftware@email.com</p>
              </div>

              <div className="w-full flex flex-row items-center space-x-3"> 
                <HiOutlinePhone className="w-7 h-7 text-white" />
                <p className="text-white">+506 2222-2222</p>
              </div>

              <div className="w-full flex flex-row items-center space-x-3"> 
                <AiOutlineGithub className="w-7 h-7 text-white" />
                <p className="text-white">biosoftwaredev</p>
              </div>
          </div>

          

          <div className="absolute left-0 right-0 mx-auto bottom-10 h-20 flex flex-row w-full justify-center space-x-5 xl:hidden">
            <FaFacebookF className='w-5 h-5 md:w-6 md:h-6 text-white hover:text-primary-100 cursor-pointer'/>
            <FaTwitter className='w-5 h-5 md:w-6 md:h-6 text-white hover:text-primary-100 cursor-pointer'/>
            <FaInstagram className='w-5 h-5 md:w-6 md:h-6 text-white hover:text-primary-100 cursor-pointer'/>
          </div>

          

          <div className="w-full h-52 bg-primary-200 xl:w-1/5 xl:h-[1000px] mt-60 xl:mt-0">
            <div className="hidden w-full h-full relative z-40 xl:flex">
              <div className="hidden absolute bottom-0 top-0 my-auto right-20 2xl:right-24 2xl:w-[300px] bg-heading dark:bg-headingNight 3xl:w-[400px] h-80 p-8 flex-col justify-center space-y-5 max-w-sm xl:flex 3xl:right-60">
                <div className="text-white font-semibold text-xl">Info</div>
                  <div className="w-full flex flex-row items-center space-x-3"> 
                    <HiOutlineMail className="w-7 h-7 text-white" />               
                    <p className="text-white">biosoftware@email.com</p>
                  </div>

                  <div className="w-full flex flex-row items-center space-x-3"> 
                    <HiOutlinePhone className="w-7 h-7 text-white" />
                    <p className="text-white">+506 2222-2222</p>
                  </div>

                  <div className="w-full flex flex-row items-center space-x-3"> 
                    <AiOutlineGithub className="w-7 h-7 text-white" />
                    <p className="text-white">biosoftwaredev</p>
                  </div>
              </div>

              <div className="hidden absolute bottom-20 h-20 flex-row w-full justify-center left-0 right-0 mx-auto space-x-10 xl:flex">
                <FaFacebookF className='w-5 h-5 md:w-6 md:h-6 text-white hover:text-primary-100 cursor-pointer'/>
                <FaTwitter className='w-5 h-5 md:w-6 md:h-6 text-white hover:text-primary-100 cursor-pointer'/>
                <FaInstagram className='w-5 h-5 md:w-6 md:h-6 text-white hover:text-primary-100 cursor-pointer'/>
              </div>
            </div>
          </div>
        </div>

        <Footer/>

    </div>
  )
}

export default Contact